from app.models.candidate import Candidate
from app.services.bedrock import analyze_cv_with_bedrock

def analyze_cv(text:str) -> Candidate:
    result = analyze_cv_with_bedrock(text)
    return Candidate(**result)
