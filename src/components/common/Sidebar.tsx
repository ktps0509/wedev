import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'



function Sidebar(): JSX.Element {

	const navigation = [
		{ name: 'Home', href: '/', current: true },
		{ name: 'Team', href: '/team', current: false },
		{ name: 'Projects', href: '/project', current: false },
		{ name: 'Knowledge', href: '/knowledge', current: false },
	]

	const router = useRouter();

	return (
		<div className="container pr-4 bg-black md:w-80">
			<aside className='md:block hidden w-full'>
				{navigation.map((item) => (
					<Disclosure key={item.name} >
						<Disclosure.Button className={`flex pl-4 py-3 w-full hover:text-red-600 hover:bg-zinc-700 cursor-pointer ${router.asPath == item.href ? 'text-red-600 font-semibold' : 'text-white font-normal'
							}`}>
							<Link href={item.href}>
								{item.name}
							</Link>
						</Disclosure.Button>
					</Disclosure>
				))
				}
			</aside>
		</div>
	)
}

export default Sidebar
