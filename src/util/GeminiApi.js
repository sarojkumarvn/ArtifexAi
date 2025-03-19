import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to convert an uploaded file to Base64
function fileToGenerativePart(file, mimeType) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1]; // Remove the data URL prefix
      resolve({
        inlineData: {
          data: base64String,
          mimeType,
        },
      });
    };
    reader.onerror = reject;
  });
}

// Text generation function
export const generateTextContent = async (prompt) => {
  const result = await model.generateContent(prompt);
  return result.response.candidates[0].content.parts[0].text;
};

// Image processing function
export const generateImageContent = async (file) => {
  const mimeType = file.type || "image/png"; // Detect MIME type (the structure of a file or a path to a file)
  const imagePart = await fileToGenerativePart(file, mimeType);
  const prompt = "Describe what the image shows and explain in detail (max 200 words).";

  const result = await model.generateContent([prompt, imagePart]);

  console.log(result);
  return result.response.candidates[0].content.parts[0].text;
};
