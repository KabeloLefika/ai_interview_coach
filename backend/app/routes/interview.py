from fastapi import APIRouter

from app.services.bedrock import generate_interview_questions

router = APIRouter()


@router.post("/generate-interview")
async def generate_interview(candidate: dict):

    questions = generate_interview_questions(candidate)

    return questions