from pydantic import BaseModel


class Student(BaseModel):
    id: int

    name: str

    email: str

    filename: str

    status: str = "waiting"

    queue_position: int