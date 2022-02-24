import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<Navbar />
				<div className='flex flex-col md:flex-row flex-1'>
					<Sidebar />
					<main className='flex-1'>
						<div className="container">
							{props.children}
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default Layout
