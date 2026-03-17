export const askMrCodeAI = async (
    sourceCode: string,
    language: string,
    problemTitle: string,
    userPrompt: string
) => {
    try {
        const response = await fetch("/api/ai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sourceCode, language, problemTitle, userPrompt }),
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        return data.message;
    } catch (error: any) {
        console.error("AI Service Error:", error);
        return "I'm having trouble connecting to my brain. Please try again later!";
    }
};