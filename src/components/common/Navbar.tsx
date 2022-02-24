import { Disclosure, Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'



function Navbar(): JSX.Element {

	const navigation = [
		{ name: 'Home', href: '/', current: true },
		{ name: 'Team', href: '/team', current: true },
		{ name: 'Projects', href: '/project', current: false },
	]

	const router = useRouter();

	return (
		<>
			<Popover>
				{({ open }) => (
					<>
						<nav className="bg-black">
							<div className="container">
								<div className="relative flex items-center justify-between h-16">
									<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
										<Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<MenuIcon className="block h-6 w-6" aria-hidden="true" />
											)}
										</Popover.Button>
									</div>
									<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
										<img
											className="block h-8 w-auto"
											src="/images/wewasanad-logo.png"
										/>
									</div>
								</div>
							</div>
						</nav>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
						// leave="transition ease-in duration-150"
						// leaveFrom="opacity-100 translate-y-0"
						// leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="sm:hidden">
								<div className="px-2 pt-2 pb-3 space-y-1">
									{navigation.map((item) => (
										<Popover.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												router.asPath == item.href ? 'bg-black text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block px-3 py-2 rounded-md text-base font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</Popover.Button>
									))}
								</div>
							</Popover.Panel>
						</Transition>


					</>
				)}
			</Popover>


		</>
	)
}

export default Navbar