from app.models.candidate import Candidate

COMMON_SKILLS = [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "SQL",
    "HTML",
    "CSS",
    "Git",
    "FastAPI",
]


def analyze_cv(text: str) -> Candidate:
    skills = []

    for skill in COMMON_SKILLS:
        if skill.lower() in text.lower():
            skills.append(skill)

    education = []

    education_keywords = [
        "Bachelor",
        "BSc",
        "Degree",
        "Diploma",
        "Computer Science",
        "Information Technology",
    ]

    for keyword in education_keywords:
        if keyword.lower() in text.lower():
            education.append(keyword)

    role = "Cloud Engineer"

    if "React" in skills:
        role = "Frontend Developer"

    if "Python" in skills and "AWS" in skills:
        role = "Cloud Engineer"

    return Candidate(
        candidate_name="Candidate",
        skills=skills,
        education=education,
        experience=[],
        projects=[],
        recommended_role=role,
    )