from fastapi import APIRouter, UploadFile, File, Form

from pathlib import Path
import shutil

from app.services.queue_service import add_student
from app.services.queue_service import load_queue
from app.services.queue_service import get_student
from app.services.cv_parser import extract_text_from_pdf
from app.services.analyzer import analyze_cv

router = APIRouter()

UPLOAD_FOLDER = Path("uploads")

UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/student-upload")
async def student_upload(
    name: str = Form(...),
    email: str = Form(...),
    file: UploadFile = File(...)
):

    destination = UPLOAD_FOLDER / file.filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    cv_text = extract_text_from_pdf(
    str(destination)
)

    candidate = analyze_cv(
        cv_text
    )

    student = add_student(
        name=name,
        email=email,
        filename=file.filename,
        candidate=candidate.model_dump(),
    )

    return student


@router.get("/queue")
def get_queue():
    return {
        "queue": load_queue()
    }


@router.get("/student-status/{student_id}")
def student_status(student_id: int):

    student = get_student(student_id)

    if student is None:
        return {
            "status": "not_found"
        }

    return student


@router.get("/queue-stats")
def queue_stats():

    queue = load_queue()

    waiting = sum(
        1 for student in queue
        if student["status"] == "waiting"
    )

    called = sum(
        1 for student in queue
        if student["status"] == "called"
    )

    interviewing = sum(
        1 for student in queue
        if student["status"] == "interviewing"
    )

    completed = sum(
        1 for student in queue
        if student["status"] == "completed"
    )

    return {
        "waiting": waiting,
        "called": called,
        "interviewing": interviewing,
        "completed": completed,
        "total": len(queue)
    }