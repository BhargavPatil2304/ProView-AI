const { GoogleGenAI } = require("@google/genai");
const {
  conceptExplainPrompt,
  questionAnswerPrompt,
} = require("../../backend/utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// @desc    Generate interview questions and answers using Gemini
// @route   POST /api/ai/generate-questions
// @access  Private
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;
    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    const rawText = response.candidates[0].content.parts[0].text;

    const cleanedText = rawText
      .replace(/^\s*```json\s*/, "")
      .replace(/\s*```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);

    res.status(200).json(data);
  } catch (error) {
    console.error("GENERATION ERROR:", error);
    res.status(500).json({
      message: "Failed to generate questions",
      error: error.message,
    });
  }
};

// @desc    Generate explains a interview question
// @route   POST /api/ai/generate-explanation
// @access  Private
const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ message: "Question is required" });
    }

    const prompt = `Provide the explanation as valid JSON like this:\n\`\`\`json\n{\n  "explanation": "Your answer here"\n}\n\`\`\`\n\nQuestion: ${question}`;

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash", // ✅ valid model!
      contents: prompt,
    });

    const rawText = response.candidates[0].content.parts[0].text;

    console.log("RAW:", rawText);

    const cleanedText = rawText
      .replace(/```json\s*/i, "")
      .replace(/```/g, "")
      .trim();

    // console.log("CLEANED:", cleanedText);

    const data = JSON.parse(cleanedText);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to generate explanation",
      error: error.message,
    });
  }
};


module.exports = { generateInterviewQuestions, generateConceptExplanation };
