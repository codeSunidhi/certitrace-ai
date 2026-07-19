const axios = require("axios");

exports.analyzeBatch = async (req, res) => {
  try {
    const { batchDetails } = req.body;

    if (!batchDetails) {
      return res.status(400).json({
        success: false,
        message: "Batch details are required",
      });
    }

    const prompt = `
You are an AI Quality Inspector for an Essential Oil Traceability System.

Analyze the following production batch.

Provide:
1. Overall Quality
2. Possible Risks
3. Recommendations
4. Traceability Notes

Batch Details:
${batchDetails}
`;

    const response = await axios.post(
  "https://router.huggingface.co/v1/chat/completions",
  {
    model: "Qwen/Qwen2.5-7B-Instruct",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.HF_API_KEY}`,
      "Content-Type": "application/json",
    },
  }
);

const analysis = response.data.choices[0].message.content;
    res.json({
      success: true,
      analysis: response.data.choices[0].message.content,
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "AI service failed",
    });
  }
};