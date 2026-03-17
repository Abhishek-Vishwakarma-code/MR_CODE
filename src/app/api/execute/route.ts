// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//     try {
//         const { language, sourceCode } = await req.json();

//         // Piston expects a specific version or "*" for latest
//         const response = await fetch("https://piston.codes/api/v2/execute", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 language: language,
//                 version: "*", 
//                 files: [{ content: sourceCode }],
//             }),
//         });

//         const data = await response.json();

//         // Check if Piston returned an error (like unsupported language)
//         if (data.message) {
//             return NextResponse.json({ error: data.message }, { status: 400 });
//         }

//         return NextResponse.json(data);
//     } catch (error) {
//         console.error("Piston Proxy Error:", error);
//         return NextResponse.json({ error: "Execution service unavailable" }, { status: 500 });
//     }
// }   
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//     try {
//         const { language, sourceCode } = await req.json();

//         const response = await fetch("https://emkc.org/api/v2/piston/execute", {
//             method: "POST",
//             headers: { 
//                 "Content-Type": "application/json",
//                 // NOTE: As of 2026, check if your project needs an auth token 
//                 // "Authorization": `Token ${process.env.PISTON_TOKEN}` 
//             },
//             body: JSON.stringify({
//                 language: language,
//                 version: "*",
//                 files: [{ content: sourceCode }],
//             }),
//         });

//         const data = await response.json();
        
//         // Handling the case where Piston returns a message (usually an error)
//         if (data.message) return NextResponse.json({ error: data.message }, { status: 400 });

//         return NextResponse.json(data);
//     } catch (error) {
//         return NextResponse.json({ error: "Execution service down" }, { status: 500 });
//     }
// }
// app/api/execute/route.ts
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { language, sourceCode } = await req.json();

//     // Map your frontend strings to OneCompiler IDs and Filenames
//     const langConfig: Record<string, { id: string; file: string }> = {
//       python: { id: "python", file: "main.py" },
//       javascript: { id: "nodejs", file: "index.js" },
//       java: { id: "java", file: "Main.java" },
//       c: { id: "c", file: "main.c" },
//       cpp: { id: "cpp", file: "main.cpp" }
//     };

//     const selected = langConfig[language.toLowerCase()];
//     if (!selected) return NextResponse.json({ error: "Unsupported language" }, { status: 400 });

//     const response = await fetch("https://api.onecompiler.com/v1/run", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-API-Key": process.env.ONECOMPILER_API_KEY || ""
//       },
//       body: JSON.stringify({
//         language: selected.id,
//         stdin: "",
//         files: [
//           {
//             name: selected.file, // THIS IS CRITICAL - DO NOT LEAVE BLANK
//             content: sourceCode
//           }
//         ]
//       })
//     });

//     const data = await response.json();

//     // Always check for stderr or exception if stdout is empty
//     const finalOutput = data.stdout || data.stderr || data.exception || "No output generated.";

//     return NextResponse.json({ output: finalOutput });
//   } catch (error) {
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
// app/api/execute/route.ts
// src/app/api/execute/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { language, sourceCode } = await req.json();

        const apiHeaders = new Headers();
        apiHeaders.append("Content-Type", "application/json");
        apiHeaders.append("X-API-Key", process.env.ONECOMPILER_API_KEY || "");

        // Map language to the specific filename OneCompiler expects for the entry point
        const extensions: Record<string, string> = {
            python: "main.py",
            java: "Main.java",
            cpp: "main.cpp",
            c: "main.c",
            javascript: "index.js"
        };

        const response = await fetch("https://api.onecompiler.com/v1/run", {
            method: "POST",
            headers: apiHeaders,
            body: JSON.stringify({
                language: language,
                stdin: "",
                files: [{
                    name: extensions[language] || "main.txt",
                    content: sourceCode
                }]
            })
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "OneCompiler Error" }, { status: 500 });
    }
}