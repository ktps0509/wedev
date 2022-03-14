import { useRouter } from 'next/router'
import React from 'react'

function KnowledgeManage(): JSX.Element {
	const router = useRouter()
	const { id } = router.query

	return (
		<>
			<div>KnowledgeManage</div>
			<p>This is knowledge Id : {id}</p>
		</>
	)
}

export default KnowledgeManage