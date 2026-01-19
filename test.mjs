import { GoogleGenAI } from "@google/genai";

// Initialize the API client. 
// Using process.env ensures the API key remains secure and is not hardcoded.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
    try {
        // Generate content using the 'flash' model for lower latency and cost.
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Explain how I can use Gemini API to make peoples life easier in a few sentences",
        });
    
        // Output the raw text response to the console.
        console.log(response.text); 

    } catch (error) {
        // Basic error handling to catch API or network failures.
        console.error("Error generating content:", error);
    }
}

main();