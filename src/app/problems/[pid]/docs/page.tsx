import React from 'react';
import Topbar from '@/app/Components/Topbar/Topbar';
import { problems } from '@/utils/problems';
import { notFound } from 'next/navigation';

type DocsPageProps = {
    params: Promise<{ pid: string }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
    const { pid } = await params; // Awaiting the dynamic ID
    const problem = problems[pid];

    // Themed 404 if the problem doesn't exist
    if (!problem) {
        return (
            <div className="flex h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[var(--brand-orange)] mb-2">404</h1>
                    <p className="text-[var(--text-secondary)]">Explanations Not Found</p>
                </div>
            </div>
        );
    }

    return (
        <main className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
            <Topbar problemPage={true} />

            <div className="max-w-4xl mx-auto w-full px-6 py-12 overflow-y-auto">
                <div className="mb-10 border-b border-[var(--border-color)] pb-6">
                    <h1 className="text-4xl font-black uppercase tracking-tight mb-2">
                        {problem.title} <span className="text-[var(--brand-orange)]">Approach</span>
                    </h1>
                    <div className="flex gap-4">
                        <span className="text-xs font-bold uppercase px-2 py-1 rounded bg-[var(--bg-accent)] text-[var(--text-secondary)]">
                            {problem.category}
                        </span>
                    </div>
                </div>

                {/* This renders the explanation from your local problem data */}
                <div
                    className="docs-content text-[var(--text-secondary)] leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: problem.explanation || "<p>Coming soon...</p>" }}
                />
            </div>
        </main>
    );
}