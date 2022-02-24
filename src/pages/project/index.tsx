import ProjectListComponent from '@/components/project/ProjectListComponent'
import { ProjectModel } from '@/model/Project.model'
import React from 'react'

const ProjectModel: ProjectModel[] = [
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

function Project() {
	return (
		<>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
				{ProjectModel.map(function (project) {
					return project && <ProjectListComponent key={project.id} project={project} />
				})}
			</div>
		</>
	)
}

export default Project
