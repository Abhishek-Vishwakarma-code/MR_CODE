import { NextResponse } from "next/server";

const JDOODLE_MAP: Record<string, { id: string; versionIndex: string }> = {
    javascript: { id: "nodejs", versionIndex: "4" },
    python: { id: "python3", versionIndex: "4" },
    cpp: { id: "cpp", versionIndex: "5" },
    java: { id: "java", versionIndex: "4" },
    c: { id: "c", versionIndex: "5" }
};

export async function POST(req: Request) {
    try {
        const { language, sourceCode } = await req.json();
        const config = JDOODLE_MAP[language];
        
        if (!config) {
            return NextResponse.json({ error: "Unsupported language" }, { status: 400 });
        }

        const response = await fetch("https://api.jdoodle.com/v1/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                clientId: process.env.JDOODLE_CLIENT_ID || "",
                clientSecret: process.env.JDOODLE_CLIENT_SECRET || "",
                script: sourceCode,
                language: config.id,
                versionIndex: config.versionIndex
            })
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "JDoodle Error" }, { status: 500 });
    }
}