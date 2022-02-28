import Button from '@/components/common/ฺฺButton/Button'
import KnowledgeListComponents from '@/components/knowledge/list/KnowledgeListComponents'
import { KnowledgeListModel } from '@/model/Knowledge/Knowledge.model'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'

function Knowledge(): JSX.Element {

	const router = useRouter()
	const KnowledgeList: KnowledgeListModel[] = [
		{
			id: 1,
			title: 'React and Typescript: Build a Portfolio Project',
			authur: 'Kittipich H.',
			image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
		},
		{
			id: 2,
			title: 'React and Typescript: Build a Portfolio Project',
			authur: 'Kittipich H.',
			image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
		},
		{
			id: 3,
			title: 'React and Typescript: Build a Portfolio Project',
			authur: 'Kittipich H.',
			image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
		},
		{
			id: 4,
			title: 'React and Typescript: Build a Portfolio Project',
			authur: 'Kittipich H.',
			image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
		},
		{
			id: 5,
			title: 'React and Typescript: Build a Portfolio Project',
			authur: 'Kittipich H.',
			image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
		}
	]

	async function AddKnowledge() {
		router.push('/knowledge/manage/')
	}

	return (
		<>
			<h1 className='font-semibold'>
				Knowledge
			</h1>

			<Button onClick={AddKnowledge} title={` Add Knowledge`}>
				<FontAwesomeIcon
					icon={faPlus}
				/>
			</Button>

			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
				{
					KnowledgeList.map((knowledge: KnowledgeListModel) => knowledge && <KnowledgeListComponents key={knowledge.id} knowledgeData={knowledge} />)
				}
			</div>
		</>
	)
}

export default Knowledge