import { ProjectModel } from '@/model/Project/Project.model'
import React from 'react'

type propData = {
	projectDetail?: ProjectModel
}

function ProjectDetailComponent(props: propData): JSX.Element {
	return (
		<>
			<h1>
				{props.projectDetail?.id}
			</h1>

			<h1>
				{props.projectDetail?.title}
			</h1>

			<h1>
				{props.projectDetail?.detail}
			</h1>

			<h1>
				{props.projectDetail?.startDate}
			</h1>
		</>
	)
}

export default ProjectDetailComponent 
