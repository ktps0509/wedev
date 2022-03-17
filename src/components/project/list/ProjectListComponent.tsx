import React from 'react'
import styles from './ProjectList.module.scss'
import classNames from 'classnames'
import { ProjectListModel } from '@/model/Project/Project.model'
import { useRouter } from 'next/router'
import Link from 'next/link'

type project = {
	projectData?: ProjectListModel
}

function ProjectListComponent(props: project): JSX.Element {

	const { projectData } = props

	return (
		<>
			<div className={classNames(styles['knowledgeCard'], 'hover:cursor-pointer')}>
				<Link href={`/knowledge/detail/${projectData?._id}`} passHref>
					<img src={projectData?.image} alt="" />
				</Link>
				<Link href={`/knowledge/detail/${projectData?._id}`} passHref>
					<h4>{projectData?.title}</h4>
				</Link>
				<p className="text-gray-400 font-light">
					{projectData?.author}
				</p>
			</div>
		</>
	)
}

export default ProjectListComponent
