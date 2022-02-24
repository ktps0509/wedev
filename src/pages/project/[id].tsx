import ProjectDetailComponent from '@/components/project/ProjectDetailComponent'
import { ProjectModel } from '@/model/Project.model'
import { useRouter } from 'next/router'
import React from 'react'

function ProjectDetail() {

	const router = useRouter()
	const { id } = router.query

	const ProjectDetail: ProjectModel =
	{
		id: 1,
		title: 'PDMO',
		detail: 'PDMO detail',
		startDate: '18/10/21'
	}

	return (
		<ProjectDetailComponent projectDetail={ProjectDetail} />
	)
}

export default ProjectDetail