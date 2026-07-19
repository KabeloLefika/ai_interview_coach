import json;

import boto3;

bedrock = boto3.client(

    service_name="bedrock-runtime",

    region_name="eu-central-1",

    verify=r"C:\ProgramData\Netskope\stagent\data\nscacert.pem"

)

MODEL_ID = "eu.anthropic.claude-3-haiku-20240307-v1:0"


def analyze_cv_with_bedrock(cv_text: str):

    prompt = f"""

You are an expert technical recruiter.

Analyze the following resume.

Return ONLY valid JSON.

The JSON must follow this exact structure:

{{

  "candidate_name": "",

  "skills": [],

  "education": [],

  "experience": [],

  "projects": [],

  "recommended_role": ""

}}

Resume:

{cv_text}

"""

    body = {

        "anthropic_version": "bedrock-2023-05-31",

        "max_tokens": 1200,

        "temperature": 0,

        "messages": [

            {

                "role": "user",

                "content": [

                    {

                        "type": "text",

                        "text": prompt,

                    }

                ],

            }

        ],

    }

    response = bedrock.invoke_model(
        modelId=MODEL_ID,
        body=json.dumps(body),
    )

    response_body = json.loads(
        response["body"].read()
    )

    text = response_body["content"][0]["text"]

    return json.loads(text)



def generate_interview_questions(candidate: dict):

    skills = ", ".join(candidate.get("skills", []))

    education = "\n".join(
        str(item) for item in candidate.get("education", [])
    )

    experience = "\n".join(
        str(item) for item in candidate.get("experience", [])
    )

    projects = "\n".join(
        str(item) for item in candidate.get("projects", [])
    )


    prompt = f"""
You are an experienced technical interviewer.

Using the candidate profile below, generate EXACTLY 5 interview questions.

Candidate Profile

Name:
{candidate["candidate_name"]}

Recommended Role:
{candidate["recommended_role"]}

Skills:
{skills}

Education:
{education}

Experience:
{experience}

Projects:
{projects}

Requirements:

- Question 1 must be behavioural.
- Question 2 must assess the candidate's strongest technical skill.
- Question 3 must be about one of the candidate's projects.
- Question 4 must be based on the recommended role.
- Question 5 must be a realistic troubleshooting or problem-solving scenario.

Return ONLY valid JSON.

Example:

{{
  "questions": [
    "...",
    "...",
    "...",
    "...",
    "..."
  ]
}}
"""

    body = {
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1000,
        "temperature": 0.3,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt,
                    }
                ],
            }
        ],
    }




    response = bedrock.invoke_model(

        modelId=MODEL_ID,

        body=json.dumps(body),

    )

    response_body = json.loads(

        response["body"].read()

    )

    text = response_body["content"][0]["text"]

    return json.loads(text)
 