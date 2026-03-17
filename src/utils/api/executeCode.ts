// const PISTON_LANG_MAP: Record<string, string> = {
//     javascript: "javascript",
//     python: "python3",
//     cpp: "cpp",
//     java: "java",
//     c: "c"
// };

// // Example test strings for your "Try All" logic
// const TEST_CODES = {
//     c: '#include <stdio.h>\nint main() { printf("C works!"); return 0; }',
//     cpp: '#include <iostream>\nint main() { std::cout << "C++ works!"; return 0; }',
//     java: 'public class Main { public static void main(String[] args) { System.out.println("Java works!"); } }',
//     python: 'print("Python works!")',
//     javascript: 'console.log("JS works!")'
// };

// export const executeCode = async (language: string, sourceCode: string) => {
//     const lang = PISTON_LANG_MAP[language.toLowerCase()];
//     if (!lang) throw new Error(`Language ${language} is not supported.`);

//     const response = await fetch("/api/execute", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ language: lang, sourceCode }),
//     });

//     const data = await response.json();
//     if (!response.ok) throw new Error(data.error || "Failed to execute code");

//     // Returns a unified output string from Piston's response
//     return data.run.output; 
// };
// utils/api/executeCode.ts

const ONECOMPILER_MAP: Record<string, { id: string; file: string }> = {
    javascript: { id: "nodejs", file: "index.js" },
    python: { id: "python", file: "main.py" },
    cpp: { id: "cpp", file: "main.cpp" },
    java: { id: "java", file: "Main.java" },
    c: { id: "c", file: "main.c" }
};

export const executeCode = async (language: string, sourceCode: string) => {
    const config = ONECOMPILER_MAP[language.toLowerCase()];
    if (!config) throw new Error(`Language ${language} is not supported.`);

    const response = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            language: config.id, 
            fileName: config.file, 
            sourceCode 
        }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to execute code");

    return data; // Returns the full OneCompiler response object
};