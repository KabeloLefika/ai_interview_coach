from pydantic import BaseModel
from typing import Any


class Candidate(BaseModel):
    candidate_name: str
    skills: list[str]
    education: list[dict]
    experience: list[dict]
    projects: list[dict]
    recommended_role: str