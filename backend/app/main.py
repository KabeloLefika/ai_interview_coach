from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.upload import router as upload_router
from app.routes.interview import router as interview_router

from app.routes.evaluate import router as evaluate_router
from app.routes.report import router as report_router
from app.routes.student import router as student_router

app = FastAPI(
    title="AI Interview Coach",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)
app.include_router(interview_router)
app.include_router(evaluate_router)
app.include_router(report_router)
app.include_router(student_router)


@app.get("/")
def root():
    return {
        "message": "AI Interview Coach API Running!"
    }