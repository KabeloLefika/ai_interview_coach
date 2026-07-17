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
 