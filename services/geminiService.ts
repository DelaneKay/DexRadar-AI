
import { GoogleGenAI } from "@google/genai";
import { ArbitrageOpportunity } from '../types';
import { GEMINI_PROMPT } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development, in a real environment the key should be set.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const fetchArbitrageOpportunities = async (): Promise<ArbitrageOpportunity[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: GEMINI_PROMPT,
      config: {
        responseMimeType: "application/json",
      }
    });
    
    const text = response.text.trim();
    // The model might return a markdown code block, so we need to clean it up.
    const jsonString = text.replace(/^```json\s*|```$/g, '');
    
    if (!jsonString) {
      // Return empty array if the model response is empty, indicating no opportunities.
      return [];
    }
    
    const opportunities: ArbitrageOpportunity[] = JSON.parse(jsonString);
    return opportunities;
  } catch (error) {
    console.error("Error fetching or parsing arbitrage opportunities:", error);
    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse the response from the AI. The format might be incorrect.");
    }
    throw new Error("An error occurred while communicating with the AI service.");
  }
};
