import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "node:fs";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

export const generateContent = async (prompt, imagePart) => {
  const prompt = "Describe how this product might be manufactured.";
  const imagePart = fileToGenerativePart("/path/to/image.png", "image/png");

  const result = await model.generateContent([prompt, imagePart]);
  console.log(result.response.text());
};
