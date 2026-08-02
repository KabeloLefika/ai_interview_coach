import json
from pathlib import Path

ACTIVE_FILE = Path("data/active_interview.json")


def set_active_student(student):

    with open(ACTIVE_FILE, "w") as f:
        json.dump(student, f, indent=4)


def get_active_student():

    if not ACTIVE_FILE.exists():
        return None

    with open(ACTIVE_FILE, "r") as f:

        try:
            return json.load(f)

        except json.JSONDecodeError:
            return None


def update_active_student_status(status: str):

    student = get_active_student()

    if not student:
        return

    student["status"] = status

    with open(ACTIVE_FILE, "w") as f:
        json.dump(student, f, indent=4)


def clear_active_student():

    if ACTIVE_FILE.exists():
        ACTIVE_FILE.unlink()