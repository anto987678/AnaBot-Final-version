"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const genai_1 = require("@google/genai");
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const genAI = new genai_1.GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
});
const model = genAI['gemini-2.5-pro-exp-03-25'];
if (!model) {
    console.error('Error: Could not access the Gemini model.');
    process.exit(1);
}
app.post('/chat', async (req, res) => {
    const { userInput } = req.body;
    try {
        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: userInput }] }],
        });
        const text = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;
        res.json({ response: text ?? 'No response from Gemini.' });
    }
    catch (error) {
        console.error('Gemini API error:', error);
        res.status(500).json({ response: 'Internal server error.' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
