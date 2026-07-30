import boto3

from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText


ses = boto3.client(
    "ses",
    region_name="eu-central-1"
)

SENDER_EMAIL = "aiinterviewcoach1@gmail.com"


def send_report_email(
    recipient: str,
    candidate_name: str,
    pdf: bytes,
):

    message = MIMEMultipart()

    message["Subject"] = "Your AI Interview Coach Report"

    message["From"] = SENDER_EMAIL

    message["To"] = recipient

    body = f"""
Hi {candidate_name},

Thank you for participating in the AI Interview Coach experience.

Your personalized interview report is attached.

We hope the feedback helps you prepare for future interviews.

Good luck with your career journey!

Regards,

AI Interview Coach
"""

    message.attach(
        MIMEText(body, "plain")
    )

    attachment = MIMEApplication(pdf)

    attachment.add_header(
        "Content-Disposition",
        "attachment",
        filename="AI_Interview_Report.pdf"
    )

    message.attach(attachment)

    try:

        response = ses.send_raw_email(

            Source=SENDER_EMAIL,

            Destinations=[recipient],

            RawMessage={
                "Data": message.as_string()
            }

        )

        print("Email sent successfully")

        print(response)

    except Exception as e:

        print("Email failed")

        print(e)