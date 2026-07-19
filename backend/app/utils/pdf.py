from io import BytesIO

from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
)


GREEN = HexColor("#93CD0C")


def build_report(candidate, report):

    buffer = BytesIO()

    doc = SimpleDocTemplate(buffer)

    styles = getSampleStyleSheet()

    story = []

    title = styles["Heading1"]
    title.textColor = GREEN

    story.append(
        Paragraph(
            "AI Interview Coaching Report",
            title,
        )
    )

    story.append(Spacer(1, 18))

    story.append(
        Paragraph(
            f"<b>Candidate:</b> {candidate['candidate_name']}",
            styles["Normal"],
        )
    )

    story.append(
        Paragraph(
            f"<b>Recommended Role:</b> {candidate['recommended_role']}",
            styles["Normal"],
        )
    )

    story.append(Spacer(1, 20))

    story.append(
        Paragraph(
            "<b>Interview Summary</b>",
            styles["Heading2"],
        )
    )

    story.append(
        Paragraph(
            report["summary"],
            styles["BodyText"],
        )
    )

    story.append(Spacer(1, 16))

    story.append(
        Paragraph(
            "<b>Strengths</b>",
            styles["Heading2"],
        )
    )

    for item in report["strengths"]:
        story.append(
            Paragraph(
                f"• {item}",
                styles["BodyText"],
            )
        )

    story.append(Spacer(1, 16))

    story.append(
        Paragraph(
            "<b>Areas for Improvement</b>",
            styles["Heading2"],
        )
    )

    for item in report["improvements"]:
        story.append(
            Paragraph(
                f"• {item}",
                styles["BodyText"],
            )
        )

    story.append(Spacer(1, 16))

    story.append(
        Paragraph(
            "<b>About the Recommended Role</b>",
            styles["Heading2"],
        )
    )

    story.append(
        Paragraph(
            report["role_overview"],
            styles["BodyText"],
        )
    )

    story.append(Spacer(1, 16))

    story.append(
        Paragraph(
            "<b>Suggested Learning Path</b>",
            styles["Heading2"],
        )
    )

    for item in report["learning_path"]:
        story.append(
            Paragraph(
                f"• {item}",
                styles["BodyText"],
            )
        )

    story.append(Spacer(1, 16))

    story.append(
        Paragraph(
            "<b>Final Feedback</b>",
            styles["Heading2"],
        )
    )

    story.append(
        Paragraph(
            report["final_feedback"],
            styles["BodyText"],
        )
    )

    doc.build(story)

    pdf = buffer.getvalue()

    buffer.close()

    return pdf