from io import BytesIO
from datetime import datetime
import os

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
    Image,
)

# -------------------------------------------------------
# Colours
# -------------------------------------------------------

DELOITTE_GREEN = HexColor("#93CD0C")
BACKGROUND = HexColor("#F8F9FA")
GREY = HexColor("#666666")

# -------------------------------------------------------
# Deloitte Logo
#
# Put your logo here:
#
# backend/app/assets/deloitte.png
# -------------------------------------------------------

BASE_DIR = os.path.dirname(__file__)

LOGO_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "..",
        "assets",
        "DEL_PRI_CMYK.jpg",
    )
)

# -------------------------------------------------------
# Footer
# -------------------------------------------------------

def footer(canvas, doc):

    canvas.saveState()

    canvas.setStrokeColor(DELOITTE_GREEN)
    canvas.setLineWidth(1)

    canvas.line(
        40,
        40,
        555,
        40,
    )

    canvas.setFont(
        "Helvetica",
        9,
    )

    canvas.setFillColor(GREY)

    canvas.drawString(
        40,
        22,
        "Powered by Amazon Bedrock",
    )

    canvas.drawRightString(
        555,
        22,
        datetime.now().strftime("%d %B %Y"),
    )

    canvas.restoreState()

# -------------------------------------------------------
# Build Report
# -------------------------------------------------------

def build_report(candidate, report):

    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=55,
    )

    styles = getSampleStyleSheet()

    title = styles["Heading1"]
    title.alignment = TA_CENTER
    title.textColor = DELOITTE_GREEN
    title.fontSize = 26

    heading = styles["Heading2"]
    heading.textColor = DELOITTE_GREEN

    body = styles["BodyText"]
    body.leading = 22

    story = []

    # =====================================================
    # COVER PAGE
    # =====================================================

    story.append(Spacer(1, 0.3 * inch))

    if os.path.exists(LOGO_PATH):

        logo = Image(
            LOGO_PATH,
            width=200,
            height=50,
        )

        logo.hAlign = "CENTER"

        story.append(logo)

    else:

        story.append(
            Paragraph(
                "<b>Deloitte</b>",
                title,
            )
        )

    story.append(Spacer(1, 30))

    story.append(
        Paragraph(
            "<font size='28'><b>AI Career Coach Report</b></font>",
            title,
        )
    )

    story.append(Spacer(1, 12))

    story.append(
        Paragraph(
            "<font size='15' color='#666666'>Powered by Amazon Bedrock</font>",
            styles["Title"],
        )
    )

    story.append(Spacer(1, 60))

    info_table = Table(
        [
            ["Candidate", candidate["candidate_name"]],
            ["Recommended Role", candidate["recommended_role"]],
            ["Date", datetime.now().strftime("%d %B %Y")],
        ],
        colWidths=[150, 300],
    )

    info_table.setStyle(
        TableStyle([
            ("BACKGROUND", (0,0), (0,-1), DELOITTE_GREEN),
            ("TEXTCOLOR", (0,0), (0,-1), colors.white),

            ("BACKGROUND", (1,0), (1,-1), BACKGROUND),

            ("GRID", (0,0), (-1,-1), 0.5, colors.grey),

            ("FONTNAME", (0,0), (-1,-1), "Helvetica-Bold"),

            ("BOTTOMPADDING",(0,0),(-1,-1),12),
            ("TOPPADDING",(0,0),(-1,-1),12),
        ])
    )

    story.append(info_table)

    story.append(Spacer(1, 60))

    story.append(
        Paragraph(
            """
            This personalized coaching report was generated using Amazon Bedrock.
            It is intended to help you understand your strengths, identify areas
            for improvement and provide guidance on your recommended career path.
            """,
            body,
        )
    )

    story.append(Spacer(1, 20))

    story.append(
        Paragraph(
            """
            This report is for educational and career guidance purposes only.
            It does not represent an employment decision or guarantee employment.
            """,
            body,
        )
    )

    story.append(PageBreak())

    # =====================================================
    # EXECUTIVE SUMMARY
    # =====================================================

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

    # =====================================================
    # STRENGTHS
    # =====================================================

    story.append(
        Paragraph(
            "Your Strengths",
            heading,
        )
    )

    story.append(Spacer(1,8))

    for item in report["strengths"]:

        story.append(
            Paragraph(
                f"✓ {item}",
                body,
            )
        )

    story.append(Spacer(1,25))


        # =====================================================
    # GROWTH OPPORTUNITIES
    # =====================================================

    story.append(
        Paragraph(
            "Growth Opportunities",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    for item in report["improvements"]:

        story.append(
            Paragraph(
                f"• {item}",
                body,
            )
        )

    story.append(Spacer(1, 25))

    # =====================================================
    # ABOUT THE ROLE
    # =====================================================

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

    # =====================================================
    # LEARNING PATH
    # =====================================================

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

    # =====================================================
    # FINAL FEEDBACK
    # =====================================================

    story.append(
        Paragraph(
            "Final Feedback",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    final_table = Table(
        [
            [
                Paragraph(
                    report["final_feedback"],
                    body,
                )
            ]
        ],
        colWidths=[470],
    )

    final_table.setStyle(
        TableStyle(
            [
                (
                    "BACKGROUND",
                    (0, 0),
                    (-1, -1),
                    HexColor("#F6FFF0"),
                ),
                (
                    "BOX",
                    (0, 0),
                    (-1, -1),
                    2,
                    DELOITTE_GREEN,
                ),
                (
                    "LEFTPADDING",
                    (0, 0),
                    (-1, -1),
                    18,
                ),
                (
                    "RIGHTPADDING",
                    (0, 0),
                    (-1, -1),
                    18,
                ),
                (
                    "TOPPADDING",
                    (0, 0),
                    (-1, -1),
                    18,
                ),
                (
                    "BOTTOMPADDING",
                    (0, 0),
                    (-1, -1),
                    18,
                ),
            ]
        )
    )

    story.append(final_table)

    story.append(Spacer(1, 35))


    # =====================================================

    # CAREER OPPORTUNITIES AT DELOITTE

    # =====================================================


    story.append(

    Paragraph(

        "Career Opportunities at Deloitte",
        heading,
        )
    )

    story.append(Spacer(1, 8))

    story.append(
        Paragraph(
        """
        Interested in exploring opportunities at Deloitte?

        Visit our careers portal to discover graduate programmes,

        internships, experienced hire roles, and other exciting

        career opportunities available across Deloitte Africa.
        """,

        body,
        )
    )
    story.append(Spacer(1, 8))
    story.append(

    Paragraph(
        """
        <link:https://www.deloitte.com/za/en/careers.html>

        Explore Deloitte Careers →

        </link>

        """,
        body,
        )
    )
    story.append(Spacer(1, 35))

    # =====================================================
    # DISCLAIMER
    # =====================================================

    story.append(
        Paragraph(
            "Privacy Notice",
            heading,
        )
    )

    story.append(Spacer(1, 8))

    story.append(
        Paragraph(
            """
            Personal information supplied during this demonstration
            has been processed in accordance with the Protection of
            Personal Information Act (POPIA).

            Information submitted during this demonstration is not
            used to train any Large Language Model (LLM) or Artificial
            Intelligence model.

            This report is intended solely for educational purposes
            and career guidance. It should not be interpreted as an
            offer of employment, a recruitment decision or professional
            career advice.
            """,
            body,
        )
    )

    story.append(Spacer(1, 30))

    # =====================================================
    # THANK YOU
    # =====================================================

    thank_you = styles["Heading1"]
    thank_you.alignment = TA_CENTER
    thank_you.textColor = DELOITTE_GREEN

    story.append(
        Paragraph(
            "Thank You",
            thank_you,
        )
    )

    story.append(Spacer(1, 15))

    centered = styles["BodyText"]
    centered.alignment = TA_CENTER
    centered.leading = 24

    story.append(
        Paragraph(
            """
            Thank you for participating in the
            <b>AI Career Coach Demonstration.</b>

            We hope this report provides useful guidance as you
            continue developing your professional career.

            We wish you every success on your career journey.
            """,
            centered,
        )
    )

    story.append(Spacer(1, 30))

    story.append(
        Paragraph(
            "<b>Powered by Amazon Bedrock</b>",
            centered,
        )
    )

    story.append(Spacer(1, 10))

    story.append(
        Paragraph(
            "<font color='#93CD0C'><b>Deloitte AI Career Coach</b></font>",
            centered,
        )
    )

    # =====================================================
    # BUILD PDF
    # =====================================================

    doc.build(
        story,
        onFirstPage=footer,
        onLaterPages=footer,
    )

    pdf = buffer.getvalue()

    buffer.close()

    return pdf