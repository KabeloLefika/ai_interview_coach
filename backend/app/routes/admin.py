from fastapi import APIRouter

from app.services.queue_service import call_student

router = APIRouter()


@router.post("/call-student/{student_id}")
def call(student_id: int):

    call_student(student_id)

    return {
        "success": True
    }