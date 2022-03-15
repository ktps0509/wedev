import { KnowledgeListModel } from '@/model/Knowledge/Knowledge.model'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from './KnowledgeListComponent.module.scss'


type knowledge = {
	knowledgeData?: KnowledgeListModel
}

function KnowledgeListComponents(props: knowledge): JSX.Element {

	const { knowledgeData } = props

	return (
		<>
			<div className={classNames(styles['knowledgeCard'], 'hover:cursor-pointer')}>
				<Link href={`/knowledge/detail/${knowledgeData?._id}`} passHref>
					<img src={knowledgeData?.image} alt="" />
				</Link>
				<Link href={`/knowledge/detail/${knowledgeData?._id}`} passHref>
					<h4>{knowledgeData?.title}</h4>
				</Link>
				<p className="text-gray-400 font-light">
					{knowledgeData?.author}
				</p>
			</div>
		</>
	)
}

export default KnowledgeListComponents