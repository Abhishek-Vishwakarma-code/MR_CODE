"use client";
import React, { useState, useRef, useEffect } from "react";
import { askMrCodeAI } from "@/utils/aiService";
import { BsStars, BsChatRightText, BsTrash, BsSendFill, BsDashLg } from "react-icons/bs";

type AIAssistantProps = {
    currentCode: string;
    language: string;
    problemTitle: string;
    onClose: () => void; // Prop exists in type
};

const AIAssistant: React.FC<AIAssistantProps> = ({
    currentCode,
    language,
    problemTitle,
    onClose // Destructured here to fix the TS error
}) => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the bottom of the chat when the AI responds
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [response, isLoading]);

    const handleAsk = async () => {
        if (!prompt.trim() || isLoading) return;
        setIsLoading(true);

        const aiText = await askMrCodeAI(currentCode, language, problemTitle, prompt);

        setResponse(aiText);
        setIsLoading(false);
        setPrompt("");
    };

    return (
        <div className="flex flex-col h-[350px] bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-all duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
            {/* HEADER SECTION */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-accent)] border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                    {/* Small version of your "M" Logo for consistency */}
                    <div className="h-6 w-6 bg-[var(--brand-orange)] rounded-md flex items-center justify-center shadow-sm">
                        <span className="text-white font-black text-xs">M</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--brand-orange)]">Mr. Code AI</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {response && (
                        <button
                            onClick={() => setResponse("")}
                            className="text-[var(--text-secondary)] hover:text-rose-500 transition-colors p-1"
                            title="Clear Chat"
                        >
                            <BsTrash size={14} />
                        </button>
                    )}

                    {/* MINIMIZE BUTTON - Triggers the onClose passed from Workspace */}
                    <button
                        onClick={onClose}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--brand-orange)] transition-all text-[10px] font-bold uppercase tracking-tighter"
                    >
                        <BsDashLg size={12} />
                        Minimize
                    </button>
                </div>
            </div>

            {/* CHAT/RESPONSE AREA */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[var(--bg-secondary)]"
            >
                {!response && !isLoading ? (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-30 select-none">
                        <BsChatRightText size={32} className="mb-3 text-[var(--text-secondary)]" />
                        <p className="text-xs font-medium text-[var(--text-secondary)]">
                            Stuck on logic? <br /> Ask for a hint or a complexity check.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {isLoading ? (
                            <div className="flex items-start gap-3 animate-pulse">
                                <div className="w-6 h-6 rounded-md bg-[var(--brand-orange)]/20 flex items-center justify-center shrink-0">
                                    <BsStars size={12} className="text-[var(--brand-orange)]" />
                                </div>
                                <div className="text-xs text-[var(--brand-orange)] italic mt-1">
                                    Analyzing your {language} solution...
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-start gap-3 animate-fadeIn">
                                <div className="w-6 h-6 rounded-md bg-[var(--brand-orange)] flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                                    <BsStars size={12} className="text-white" />
                                </div>
                                <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm p-3 rounded-lg border border-[var(--border-color)] leading-relaxed shadow-sm whitespace-pre-wrap">
                                    {response}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* INPUT SECTION */}
            <div className="p-3 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
                <div className="relative flex items-center group">
                    <input
                        type="text"
                        placeholder="Ask about logic or complexity..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                        className="w-full bg-[var(--bg-accent)] text-[var(--text-primary)] text-xs rounded-xl pl-4 pr-12 py-3 outline-none border border-[var(--border-color)] focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)]/20 transition-all"
                    />
                    <button
                        onClick={handleAsk}
                        disabled={isLoading || !prompt.trim()}
                        className="absolute right-2 p-2 text-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/10 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                    >
                        <BsSendFill size={16} />
                    </button>
                </div>
                <p className="text-[10px] text-[var(--text-secondary)] mt-2 text-center opacity-50">
                    Verify AI-generated logic before final submission.
                </p>
            </div>
        </div>
    );
};

export default AIAssistant;