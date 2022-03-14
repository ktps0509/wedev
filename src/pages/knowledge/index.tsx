import Button from '@/components/common/ฺฺButton/Button'
import KnowledgeListComponents from '@/components/knowledge/list/KnowledgeListComponents'
import { KnowledgeListModel } from '@/model/Knowledge/Knowledge.model'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

function Knowledge(): JSX.Element {

	const address = `https://wedev-de47.restdb.io/rest/project`;

	const fetcher = async (url: string) => await axios.get(url, {
		headers: {
			'cache-control': 'no-cache',
			'x-apikey': '622f0791dced170e8c83a246',
			'content-type': 'application/json'
		}
	}).then((res) => {
		return res.data;
	});

	const { data, error } = useSWR(address, fetcher);

	if (error) console.log(error);
	if (!data) console.log("Loading API");

	const KnowledgeList: KnowledgeListModel[] = [];

	data.map((data: any, i: any) => {
		var model: KnowledgeListModel = data;
		KnowledgeList.push(model);

		return data
	})
	for (var i = 0; i < 0; i++) {
	}
	console.log(KnowledgeList)

	const router = useRouter()
	// const KnowledgeList: KnowledgeListModel[] = [
	// 	{
	// 		id: 1,
	// 		title: 'React and Typescript: Build a Portfolio Project',
	// 		authur: 'Kittipich H.',
	// 		image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'React and Typescript: Build a Portfolio Project',
	// 		authur: 'Kittipich H.',
	// 		image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'React and Typescript: Build a Portfolio Project',
	// 		authur: 'Kittipich H.',
	// 		image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'React and Typescript: Build a Portfolio Project',
	// 		authur: 'Kittipich H.',
	// 		image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'React and Typescript: Build a Portfolio Project',
	// 		authur: 'Kittipich H.',
	// 		image: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
	// 	}
	// ]

	async function AddKnowledge(id: number) {
		router.push(`/knowledge/manage/${id}`)
	}

	return (
		<>
			<h1 className='font-semibold mb-4'>
				Knowledge
			</h1>

			<Button onClick={() => AddKnowledge(0)} title={` Add Knowledge`}>
				<FontAwesomeIcon
					icon={faPlus}
				/>
			</Button>

			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
				{
					KnowledgeList.map((knowledge: KnowledgeListModel) => knowledge && <KnowledgeListComponents key={knowledge._id} knowledgeData={knowledge} />)
				}
			</div>
		</>
	)
}

export default Knowledge