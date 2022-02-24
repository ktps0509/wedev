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
	]

	const router = useRouter();

	return (
		<div className="container bg-black md:w-80">
			<aside className='md:block hidden'>
				{navigation.map((item) => (
					<Disclosure key={item.name}>
						<Disclosure.Button className={`flex p-2 hover:text-red-600 cursor-pointer ${router.asPath == item.href ? 'text-red-600 font-semibold' : 'text-white font-normal'
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
