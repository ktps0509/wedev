import React from 'react'
import styles from './ProjectList.module.scss'
import classNames from 'classnames'
import { ProjectModel } from '@/model/Project.model'
import { useRouter } from 'next/router'
import Link from 'next/link'

type propsData = {
	project?: ProjectModel
}

function ProjectListComponent(props: propsData): JSX.Element {

	const { project } = props
	const router = useRouter()

	function viewProject() {
		router.push('/project/' + project?.id)
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
					<div className='grid sm:grid-cols-2 grid-cols-1'>
						<button className={classNames('mx-4', styles['btn'])} onClick={deleteProject}>
							Delete
						</button>
						<Link href={`/project/${project?.id}`} passHref >
							<button className={classNames('sm:mt-0 mt-3 mx-4', styles['btn'])}>
								View
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectListComponent
