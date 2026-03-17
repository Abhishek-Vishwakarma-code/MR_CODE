import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { sourceCode, language, problemTitle, userPrompt } = body;

        // 1. Get the key and trim any accidental whitespace
        const apiKey = process.env.GEMINI_API_KEY?.trim();

        if (!apiKey) {
            return NextResponse.json({ error: "Server error: API Key is missing." }, { status: 500 });
        }

        // 2. Initialize the AI with the sanitized key
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const prompt = `
            You are "Mr. Code AI", a professional DSA mentor for IT students.
            
            Context:
            Problem: ${problemTitle}
            Language: ${language}
            
            Student's Code:
            \`\`\`${language}
            ${sourceCode}
            \`\`\`

            Student's Question: "${userPrompt}"

            Rules:
            - Give logic-based hints, not the full solution.
            - Explain complexity if relevant.
            - Keep it encouraging.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ message: text });

    } catch (error: any) {
        console.error("Gemini Integration Error:", error);

        // If Google rejects the key, we'll see the exact reason here
        return NextResponse.json({
            error: error.message || "The AI is currently unavailable."
        }, { status: 500 });
    }
}