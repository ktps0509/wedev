import ProjectDetailComponent from '@/components/project/detail/ProjectDetailComponent'
import { ProjectModel } from '@/model/Project/Project.model'
import { useRouter } from 'next/router'
import React from 'react'

function ProjectDetail() {

	const router = useRouter()
	const { id } = router.query

	const ProjectDetail: ProjectModel =
	{
		id: Number(id),
		title: 'PDMO',
		detail: 'PDMO detail',
		startDate: '18/10/21'
	}

	return (
		<ProjectDetailComponent projectDetail={ProjectDetail} />
	)
}

export default ProjectDetail