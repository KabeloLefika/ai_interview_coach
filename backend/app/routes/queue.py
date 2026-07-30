from fastapi import APIRouter
from app.services.queue_service import load_queue

router = APIRouter()

@router.get("/queue")
def get_queue():
    return load_queue()