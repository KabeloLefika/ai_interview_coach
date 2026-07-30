from fastapi import APIRouter, UploadFile, File, Form

from pathlib import Path
import shutil

from app.services.queue_service import add_student

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

    student = add_student(
        name=name,
        email=email,
        filename=file.filename,
    )

    return student