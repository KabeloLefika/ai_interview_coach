from pydantic import BaseModel


class Candidate(BaseModel):
    candidate_name: str
    skills: list[str]
    education: list[str]
    experience: list[str]
    projects: list[str]
    recommended_role: str