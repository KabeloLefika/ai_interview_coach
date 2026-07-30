import json
from pathlib import Path

QUEUE_FILE = Path("data/queue.json")


def load_queue():

    if not QUEUE_FILE.exists():
        return []

    with open(QUEUE_FILE, "r") as f:
        data = json.load(f)

    return data.get("queue", [])


def save_queue(queue):

    with open(QUEUE_FILE, "w") as f:
        json.dump({"queue": queue}, f, indent=4)


def get_next_id(queue):

    if not queue:
        return 1

    return max(student["id"] for student in queue) + 1


def add_student(name, email, filename):

    queue = load_queue()

    student = {
        "id": get_next_id(queue),
        "name": name,
        "email": email,
        "filename": filename,
        "status": "waiting",
        "queue_position": len(queue) + 1,
    }

    queue.append(student)

    save_queue(queue)

    return student


def get_queue():

    return load_queue()