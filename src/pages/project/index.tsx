import ProjectListComponent from '@/components/project/list/ProjectListComponent'
import { ProjectListModel } from '@/model/Project/Project.model'
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import useSWR, { Fetcher } from 'swr';

function Project(): JSX.Element {

	const address = `https://wedev-de47.restdb.io/rest/project`;

	const fetcher: Fetcher<ProjectListModel[]> = async (url: string) => await axios.get(url, {
		headers: {
			'cache-control': 'no-cache',
			'x-apikey': '622f0791dced170e8c83a246',
			'content-type': 'application/json'
		}
	}).then((res) => {
		return res.data;
	});

	const { data: ProjectList, error } = useSWR<ProjectListModel[]>(address, fetcher);

	if (error) console.log(error);
	const router = useRouter()

	return (
		<>
			<h1 className='font-semibold mb-4'>
				Project
			</h1>

			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
				{
					ProjectList?.map((project: ProjectListModel) => project && <ProjectListComponent key={project._id} projectData={project} />)
				}
			</div>
		</>
	)
}

export default Project
