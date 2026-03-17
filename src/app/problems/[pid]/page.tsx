import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Workspace from '@/app/Components/Workspace/Workspace';
import { problems } from '@/utils/problems';

type ProblemPageProps = {
    params: Promise<{ pid: string }>; // Must be a Promise
};

export async function generateStaticParams() {
    return Object.keys(problems).map((pid) => ({ pid }));
}

export default async function ProblemPage({ params }: ProblemPageProps) {
    const { pid } = await params; // AWAIT the params
    const problem = problems[pid];

    // Themed 404 State
    if (!problem) {
        return (
            <div className="flex h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[var(--brand-orange)] mb-2">404</h1>
                    <p className="text-[var(--text-secondary)]">Problem Not Found</p>
                </div>
            </div>
        );
    }

    // Themed Page Wrapper
    return (
        <main className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-hidden">
            <Topbar problemPage={true} />
            <Workspace problem={problem} />
        </main>
    );
}