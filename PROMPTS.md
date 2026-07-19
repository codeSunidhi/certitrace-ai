# AI Prompt Testing Log

## Feature

AI Batch Quality Analysis for Essential Oil Traceability.

Model:
Hugging Face Inference Provider


# Prompt 1

## Prompt

Analyze this production batch and provide quality information.

## Input

Batch B101, Lavender Oil, Moisture 8%, Certificate verified.

## Output

The AI provided a general quality assessment.

## Result

Good but lacked detailed recommendations.


# Prompt 2

## Prompt

You are an AI Quality Inspector for an Essential Oil Traceability System.

Analyze the production batch.

Provide:
1. Overall Quality
2. Possible Risks
3. Recommendations
4. Traceability Notes

## Input

Batch B101, Lavender Oil, Harvest Date 2025-07-01, Moisture 8%, Certificate Verified.

## Output

Generated detailed quality analysis with risks and recommendations.

## Result

Better structure and more useful information.


# Prompt 3

## Prompt

Act as a professional supply-chain quality auditor.

Analyze this essential oil batch and focus on:
- Quality
- Safety risks
- Certificate verification
- Traceability improvements

## Input

Batch B101, Lavender Oil, Certificate Verified.

## Output

Produced an audit-style report.

## Result

Useful but more formal than required.


# Best Prompt

Prompt 2 worked best because it provided a clear role, specific output sections, and domain context. The structured format produced consistent AI responses suitable for the CertiTrace AI dashboard.


# System Role

The AI was instructed to act as a quality inspector for essential oil production and traceability.