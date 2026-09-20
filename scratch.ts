import { GoogleGenAI } from "@google/genai";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function run() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: { parts: [{ text: "Hello!" }] }
    });
    console.log("Success Format", res.text);
  } catch (e) {
    console.error("FAIL", e);
  }
}
run();
