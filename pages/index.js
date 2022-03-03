import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import PageContainer from 'components/PageContainer'
import HomeCard from 'components/HomeCard'
import NavContainer from 'components/NavContainer'
import NavLink from 'components/NavLink'
import Timer from 'components/Timer'
import Navbar from 'components/Navbar'
import withTransition from 'HOC/withTransition'

function Home() {
	const router = useRouter()
	const container = {
		hidden: {
			opacity: 0.1,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 2,
			},
		},
	}

	return (
		<>
			<Navbar />
			<div className='h-full flex flex-row'>
				<PageContainer start={true}>
					<div className='mt-10 flex flex-col lg:flex-row'>
						<object
							type='image/svg+xml'
							data='/logo/animated-fire.svg'
							className='h-48 md:h-56 lg:h-64'
						/>
						<object
							type='image/svg+xml'
							data='/logo/text.svg'
							className='h-24 md:h-32 lg:h-42 self-end bg-transparent'
						/>
					</div>
					<div className='flex flex-col  justify-around items-center gap-y-10 lg:gap-x-20 bg-transparent'>
						<div className='hidden md:block'>
							<Timer
								hideYear={true}
								titlePosition='bottom'
								size='medium'
								endAt={'2022-03-20 01:26:58'} // Date/Time
							/>
						</div>
						<div className='md:hidden'>
							<Timer
								hideYear={true}
								titlePosition='bottom'
								size='small'
								endAt={'2022-03-20 01:26:58'} // Date/Time
							/>
						</div>
						<div className='relative group my-5'>
							<div className='absolute -inset-0.5 rounded-lg blur opacity-80 group-hover:opacity-100 bg-gradient-to-tr from-amber-600 to-yellow-500 transition-all duration-500 group-hover:duration-300'></div>
							<button
								onClick={() => router.push('/events')}
								className='relative px-3 md:px-4 lg:px-5 py-2 flex flex-row items-center gap-x-2 text-base md:text-base lg:text-lg text-white bg-rich-black rounded-lg'>
								REGISTER NOW
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 transform transition-all duration-300 lg:group-hover:translate-x-1'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17 8l4 4m0 0l-4 4m4-4H3'
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className='relative w-full flex flex-col justify-start items-center gap-y-10'>
						<div className='absolute z-0 top-2 h-1 w-3/4 bg-gradient-to-r from-transparent via-feldgrau to-transparent' />
						<motion.div
							className='z-10 w-3/4 flex flex-row justify-around items-center'
							initial='hidden'
							animate='visible'
							variants={container}>
							<HomeCard
								text='Prices worth 10Lac!'
								filename='trophy.webp'
							/>
							<HomeCard
								text='3000+ participants'
								filename='saly15.webp'
							/>
							<HomeCard
								text='Dozens of fun events!'
								filename='saly19.webp'
							/>
						</motion.div>
					</div>
				</PageContainer>

				<NavContainer>
					<NavLink page='about' edge='left' />
					<NavLink page='events' edge='' />
					<NavLink page='sponsors' edge='' />
					<NavLink page='contact' edge='right' />
				</NavContainer>
			</div>
		</>
	)
}

export default Home
