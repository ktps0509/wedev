import React from 'react'
import styles from './ProjectList.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { ProjectModel } from '@/model/Project.model'

type propsData = {
	project?: ProjectModel
}

function ProjectListComponent(props: propsData): JSX.Element {

	const { project } = props

	function viewProject() {
		console.log('viewProject')
		console.log(project?.title)
	}

	function deleteProject() {
		console.log('deleteProject')
		console.log(project?.title)
	}

	return (
		<>
			<div className={classNames(styles['card'])}>
				<h2>
					{project?.title}
				</h2>
				<p>
					{project?.detail}
				</p>
				<p>
					{project?.startDate}
				</p>

				<div className={styles.actions}>
					<button className={styles.btn} onClick={deleteProject}>
						Delete
					</button>
					<button className={styles.btn} onClick={viewProject}>
						<Link href={'/project/12'}>
							View
						</Link>
					</button>
				</div>
			</div>
		</>
	)
}

export default ProjectListComponent
