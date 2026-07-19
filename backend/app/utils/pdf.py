from io import BytesIO
from datetime import datetime

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
)

DELOITTE_GREEN = HexColor("#93CD0C")
BACKGROUND = HexColor("#F8F9FA")
DARK = HexColor("#1B1B1B")
GREY = HexColor("#666666")


def footer(canvas, doc):
    canvas.saveState()

    canvas.setFont("Helvetica", 9)
    canvas.setFillColor(GREY)

    canvas.drawString(
        40,
        25,
        "Generated securely using Amazon Bedrock"
    )

    canvas.drawRightString(
        555,
        25,
        datetime.now().strftime("%d %B %Y")
    )

    canvas.restoreState()


def build_report(candidate, report):

    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=50,
    )

    styles = getSampleStyleSheet()

    title = styles["Heading1"]
    title.alignment = TA_CENTER
    title.textColor = DELOITTE_GREEN
    title.fontSize = 30

    heading = styles["Heading2"]
    heading.textColor = DELOITTE_GREEN

    body = styles["BodyText"]
    body.leading = 22

    story = []

    # ------------------------------------------------------------------
    # COVER PAGE
    # ------------------------------------------------------------------

    story.append(Spacer(1, 0.5 * inch))

    story.append(
        Paragraph(
            "<font size='34'><b>Deloitte</b></font>",
            title,
        )
    )

    story.append(Spacer(1, 20))

    story.append(
        Paragraph(
            "<font size='24'><b>AI Career Coach Report</b></font>",
            title,
        )
    )

    story.append(Spacer(1, 10))

    story.append(
        Paragraph(
            "<font color='#666666' size='16'>Powered by Amazon Bedrock</font>",
            styles["Title"],
        )
    )

    story.append(Spacer(1, 60))

    candidate_table = Table(
        [
            ["Candidate", candidate["candidate_name"]],
            ["Recommended Role", candidate["recommended_role"]],
            [
                "Generated",
                datetime.now().strftime("%d %B %Y"),
            ],
        ],
        colWidths=[160, 280],
    )

    candidate_table.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (0, -1), DELOITTE_GREEN),
            ("TEXTCOLOR", (0, 0), (0, -1), colors.white),

            ("BACKGROUND", (1, 0), (1, -1), BACKGROUND),

            ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),

            ("FONTNAME", (0, 0), (-1, -1), "Helvetica-Bold"),

            ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING", (0, 0), (-1, -1), 12),
        ])
    )

    story.append(candidate_table)

    story.append(Spacer(1, 80))

    story.append(
        Paragraph(
            """
            This report was generated using Amazon Bedrock and is intended
            to provide career guidance and interview coaching.

            It does not constitute an offer of employment or a recruitment
            decision.
            """,
            body,
        )
    )

    story.append(PageBreak())

    # ------------------------------------------------------------------
    # EXECUTIVE SUMMARY
    # ------------------------------------------------------------------

    story.append(
        Paragraph(
            "Executive Summary",
            heading,
        )
    )

    story.append(Spacer(1, 10))

    story.append(
        Paragraph(
            report["summary"],
            body,
        )
    )

    story.append(Spacer(1, 25))

    # ------------------------------------------------------------------
    # STRENGTHS
    # ------------------------------------------------------------------

    story.append(
        Paragraph(
            "Strengths",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    for strength in report["strengths"]:
        story.append(
            Paragraph(
                f"✓ {strength}",
                body,
            )
        )

    story.append(Spacer(1, 25))

    # ------------------------------------------------------------------
    # IMPROVEMENTS
    # ------------------------------------------------------------------

    story.append(
        Paragraph(
            "Growth Opportunities",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    for improvement in report["improvements"]:
        story.append(
            Paragraph(
                f"• {improvement}",
                body,
            )
        )

    story.append(Spacer(1, 25))

    # ------------------------------------------------------------------
    # ROLE
    # ------------------------------------------------------------------

    story.append(
        Paragraph(
            "About Your Recommended Role",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    story.append(
        Paragraph(
            report["role_overview"],
            body,
        )
    )

    story.append(Spacer(1, 25))

    # ------------------------------------------------------------------
    # LEARNING
    # ------------------------------------------------------------------

    story.append(
        Paragraph(
            "Suggested Learning Path",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    for item in report["learning_path"]:
        story.append(
            Paragraph(
                f"• {item}",
                body,
            )
        )

    story.append(Spacer(1, 25))

    # ------------------------------------------------------------------
    # FINAL FEEDBACK
    # ------------------------------------------------------------------

    story.append(
        Paragraph(
            "Final Feedback",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    story.append(
        Paragraph(
            report["final_feedback"],
            body,
        )
    )

    story.append(Spacer(1, 40))

    story.append(
        Paragraph(
            "<b>Thank you for participating in the AI Career Coach demonstration.</b>",
            styles["Title"],
        )
    )

    story.append(Spacer(1, 15))

    story.append(
        Paragraph(
            """
            This report has been generated for educational and career guidance
            purposes only.

            Personal information supplied during this demonstration is processed
            in accordance with the Protection of Personal Information Act (POPIA)
            and is not used to train any Large Language Model or AI model.
            """,
            body,
        )
    )

    doc.build(
        story,
        onFirstPage=footer,
        onLaterPages=footer,
    )

    pdf = buffer.getvalue()

    buffer.close()

    return pdf