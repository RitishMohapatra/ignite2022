/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import NavLink from 'components/NavLink'
import NextLink from 'next/link'

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'About', href: '/about', current: false },
	{ name: 'Events', href: '/events', current: false },
	{ name: 'Sponsors', href: '/sponsors', current: false },
	{ name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Example() {
	return (
		<Disclosure as='nav' className='bg-black md:hidden'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between h-20'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XIcon
											className='block h-8 w-8'
											aria-hidden='true'
										/>
									) : (
										<MenuIcon
											className='block h-8 w-8'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex-shrink-0 flex items-center'>
									<object
										type='image/svg+xml'
										data='/logo/text.svg'
										className='h-16 md:h-32 lg:h-42 self-end bg-transparent'
									/>
									<img
										className='hidden lg:block h-8 w-auto'
										src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
										alt='Workflow'
									/>
								</div>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map((item) => (
											<NextLink
												// key={item.name}
												href={item.href}
												// page={item.name}
												className={classNames(
													item.current
														? 'bg-gray-900 text-white'
														: 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
												// aria-current={item.current ? "page" : undefined}
											>
												<a>{item.name}</a>
											</NextLink>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={
										item.current ? 'page' : undefined
									}>
									<NextLink href={item.href}>
										{item.name}
									</NextLink>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
