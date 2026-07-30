from pathlib import Path
import shutil

from fastapi import APIRouter, File, UploadFile

from app.services.cv_parser import extract_text_from_pdf
from app.services.analyzer import analyze_cv
from app.services.active_interview_service import get_active_student

router = APIRouter()

# Create uploads folder if it doesn't exist
UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/upload-cv")
async def upload_cv(file: UploadFile = File(...)):
    # Only allow PDF files
    if not file.filename.lower().endswith(".pdf"):
        return {
            "message": "Only PDF files are allowed."
        }

    # Save the uploaded file
    file_path = UPLOAD_FOLDER / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from the PDF
    cv_text = extract_text_from_pdf(str(file_path))

    # Analyze the extracted text
    candidate = analyze_cv(cv_text)

    # Return the analysis
    return {
        "message": "CV uploaded successfully!",
        "filename": file.filename,
        "candidate": candidate.model_dump(),
    }

@router.get("/analyze-active-student")
def analyze_active_student():

    student = get_active_student()

    if not student:
        return {
            "candidate": None
        }

    file_path = UPLOAD_FOLDER / student["filename"]

    if not file_path.exists():
        return {
            "candidate": None,
            "message": "CV not found."
        }

    cv_text = extract_text_from_pdf(str(file_path))

    candidate = analyze_cv(cv_text)

    return {
        "student": student,
        "candidate": candidate.model_dump(),
    }