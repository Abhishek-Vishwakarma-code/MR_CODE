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

    if (!problem) return <div>Problem Not Found</div>;

    return (
        <>
            <Topbar problemPage={true} />
            <Workspace problem={problem} />
        </>
    );
}