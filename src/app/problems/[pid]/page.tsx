// import React from 'react';
// import Topbar from '../../Components/Topbar/Topbar';
// import Workspace from '@/app/Components/Workspace/Workspace';
// import { problems } from '@/utils/problems';
// import { Problem } from '@/utils/types/problem'

// type ProblemPageProps = {
//     problem:Problem;
// };

// const ProblemPage:React.FC<ProblemPageProps> = ({ problem }) => {
//     console.log(problem);
//    	return (
// 		<div>
// 			<Topbar problemPage />
// 			<Workspace problem={problem} />
// 		</div>
// 	);
// };
// export default ProblemPage;

// // fetch the local data from the API
// // SSG 
// // getstaticPaths => it creates the dynamio routes
// // getStaticPaths => it create the dynamic routes
// export async function getStaticPaths() {
// 	const paths = Object.keys(problems).map((key) => ({
// 		params: { pid: key },
// 	}));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// // getstaticProps => it fetches the data
// export async function getStaticProps({ params }: { params: { pid: string } }) {
// 	const { pid } = params;
// 	const problem = problems[pid];

// 	if (!problem) {
// 		return {
// 			notFound: true,
// 		};
// 	}
// 	problem.handlerFunction = problem.handlerFunction.toString();
// 	return {
// 		props: {
// 			problem,
// 		},
// 	};
// }
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