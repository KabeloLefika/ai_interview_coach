from fastapi import APIRouter

from app.services.queue_service import call_student
from app.services.active_interview_service import (
    get_active_student,
    clear_active_student,
)

router = APIRouter()


@router.post("/call-student/{student_id}")
def call(student_id: int):

    student = call_student(student_id)

    return {
        "success": True,
        "student": student,
    }


@router.get("/active-interview")
def active_interview():

    return {
        "student": get_active_student()
    }


@router.post("/clear-active-interview")
def clear():

    clear_active_student()

    return {
        "success": True
    }