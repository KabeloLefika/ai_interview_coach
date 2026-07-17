"""Quick sanity-check for Bedrock connectivity - tests all configured models."""

import boto3

REGION = "eu-central-1"

CONVERSE_MODELS = [
    (
        "BEDROCK_MODEL_ID_1",
        "arn:aws:bedrock:eu-central-1:043330581411:inference-profile/eu.anthropic.claude-sonnet-4-6",
    ),
    (
        "BEDROCK_MODEL_ID_2",
        "arn:aws:bedrock:eu-central-1:043330581411:inference-profile/eu.anthropic.claude-opus-4-8",
    ),
]

EMBEDDING_MODEL = ("BEDROCK_EMBEDDING_MODEL_ID", "amazon.titan-embed-text-v2:0")

runtime = boto3.client("bedrock-runtime", region_name=REGION)

all_passed = True

for name, model_id in CONVERSE_MODELS:
    print(f"\n[{name}] {model_id}")
    try:
        response = runtime.converse(
            modelId=model_id,
            messages=[
                {"role": "user", "content": [{"text": "Reply with one word: working"}]}
            ],
            inferenceConfig={"maxTokens": 16},
        )
        text = response["output"]["message"]["content"][0]["text"]
        print(f"  Response: {text}")
        print(f"  PASS")
    except Exception as e:
        print(f"  FAIL: {e}")
        all_passed = False

print(f"\n[{EMBEDDING_MODEL[0]}] {EMBEDDING_MODEL[1]}")
try:
    response = runtime.invoke_model(
        modelId=EMBEDDING_MODEL[1],
        body=b'{"inputText": "test embedding", "dimensions": 1024}',
        contentType="application/json",
        accept="application/json",
    )
    import json

    body = json.loads(response["body"].read())
    dims = len(body.get("embedding", []))
    print(f"  Embedding dimensions: {dims}")
    print(f"  PASS")
except Exception as e:
    print(f"  FAIL: {e}")
    all_passed = False

print()
print("ALL PASSED" if all_passed else "SOME TESTS FAILED")
