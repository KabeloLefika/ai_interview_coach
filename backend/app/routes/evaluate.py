from fastapi import APIRouter
from pydantic import BaseModel

from app.services.bedrock import evaluate_interview

router = APIRouter()


class EvaluationRequest(BaseModel):
    candidate: dict
    questions: list[str]
    answers: list[str]


@router.post("/evaluate-interview")
def evaluate(request: EvaluationRequest):

    report = evaluate_interview(
        request.candidate,
        request.questions,
        request.answers,
    )

    return report