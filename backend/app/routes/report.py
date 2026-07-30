from io import BytesIO

from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from app.utils.pdf import build_report
from app.services.email_service import send_report_email

router = APIRouter()


class ReportRequest(BaseModel):
    candidate: dict
    report: dict
    email: str


@router.post("/download-report")
def download_report(request: ReportRequest):

    pdf = build_report(
        request.candidate,
        request.report,
    )

    send_report_email(
        recipient=request.email,
        candidate_name=request.candidate["candidate_name"],
        pdf=pdf,
    )

    return StreamingResponse(
        BytesIO(pdf),
        media_type="application/pdf",
        headers={
            "Content-Disposition":
            "attachment; filename=AI_Interview_Report.pdf"
        },
    )