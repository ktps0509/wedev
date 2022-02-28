import ProjectListComponent from '@/components/project/list/ProjectListComponent'
import { ProjectModel } from '@/model/Project/Project.model'
import React from 'react'

function Project(): JSX.Element {

	const ProjectListData: ProjectModel[] = [
		{
			id: 1,
			title: 'PDMO',
			detail: 'PDMO detail',
			startDate: '18/10/21'
		},
		{
			id: 2,
			title: 'TKPark',
			detail: 'TKPark detail',
			startDate: '18/10/21'
		},
		{
			id: 3,
			title: 'Welearn',
			detail: 'Welearn detail',
			startDate: '18/10/21'
		},
		{
			id: 4,
			title: 'Welearn',
			detail: 'Welearn detail',
			startDate: '18/10/21'
		}
	]

	return (
		<>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
				{
					ProjectListData.map((project: ProjectModel) => project && <ProjectListComponent key={project.id} project={project} />)
				}
			</div>
		</>
	)
}

export default Project
