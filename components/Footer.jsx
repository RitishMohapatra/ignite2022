import { useState } from 'react'
import NextLink from 'next/link'
import Timer from 'components/Timer'

export default function Footer() {
	const [isCopied, setIsCopied] = useState(false)
	const copyEmail = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText('ignite@nmims.edu.in')
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 2000)
	}

	return (
		<footer className='w-full px-1 md:px-2 lg:px-3 py-8 md:py-10 lg:py-20 flex flex-col bg-trueGray-900 text-gray-300 rounded-t-3xl lg:rounded-t-none lg:rounded-tl-3xl'>
			<div className='flex flex-col lg:flex-row justify-around gap-10'>
				<div className='flex flex-col gap-y-3 items-center'>
					<svg
						className='h-12 md:h-14 lg:h-16'
						viewBox='0 0 276 389'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M34.8105 182.257V319.253L120.285 387.992'
							fill='url(#paint0_linear_257_65)'
						/>
						<path
							d='M129.463 250.393L92.9277 297.107L129.463 387.993'
							fill='url(#paint1_linear_257_65)'
						/>
						<path
							d='M184.605 182.257L137.471 243.01V376.98'
							fill='url(#paint2_linear_257_65)'
						/>
						<path
							d='M170.848 259.228L141.191 387.995L190.808 319.254'
							fill='url(#paint3_linear_257_65)'
						/>
						<path
							d='M232.868 264.431L149.535 385.088L232.868 329.54'
							fill='url(#paint4_linear_257_65)'
						/>
						<path
							d='M258.469 209.004L239.074 255.598V323.61'
							fill='url(#paint5_linear_257_65)'
						/>
						<path
							d='M258.863 239.258L251.871 285.125L265.065 266.367'
							fill='url(#paint6_linear_257_65)'
						/>
						<path
							d='M248.772 157.691L239.074 244.584L258.469 192.788'
							fill='url(#paint7_linear_257_65)'
						/>
						<path
							d='M219.786 132.035L206.818 191.093L225.538 209.004'
							fill='url(#paint8_linear_257_65)'
						/>
						<path
							d='M199.75 201.162V290.346L233.011 236.442'
							fill='url(#paint9_linear_257_65)'
						/>
						<path
							d='M190.81 189.52L175.135 250.393L193.403 306.427'
							fill='url(#paint10_linear_257_65)'
						/>
						<path
							d='M153.935 121.506L132.059 234.055L184.269 168.341'
							fill='url(#paint11_linear_257_65)'
						/>
						<path
							d='M23.2976 211.547L5.59375 270.969L23.2976 290.211'
							fill='url(#paint12_linear_257_65)'
						/>
						<path
							d='M39.7676 173.182L70.4392 242.405V136.633'
							fill='url(#paint13_linear_257_65)'
						/>
						<path
							d='M103.308 144.677L82.4043 262.599L115.667 192.541'
							fill='url(#paint14_linear_257_65)'
						/>
						<path
							d='M118.706 218.008L86.0977 285.391L120.284 241.421'
							fill='url(#paint15_linear_257_65)'
						/>
						<path
							d='M141.192 0L105.221 62.2047L129.465 86.651'
							fill='url(#paint16_linear_257_65)'
						/>
						<path
							d='M105.221 68.7402L137.471 175.722L149.537 114.002'
							fill='url(#paint17_linear_257_65)'
						/>
						<path
							d='M154.727 95.7285L206.823 157.691L217.648 126.71'
							fill='url(#paint18_linear_257_65)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_257_65'
								x1='77.5478'
								y1='182.257'
								x2='77.5478'
								y2='387.992'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint1_linear_257_65'
								x1='111.195'
								y1='250.393'
								x2='111.195'
								y2='387.993'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint2_linear_257_65'
								x1='161.039'
								y1='182.257'
								x2='161.039'
								y2='376.98'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint3_linear_257_65'
								x1='166'
								y1='259.228'
								x2='166'
								y2='387.995'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint4_linear_257_65'
								x1='191.201'
								y1='264.431'
								x2='191.201'
								y2='385.088'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint5_linear_257_65'
								x1='248.772'
								y1='209.004'
								x2='248.772'
								y2='323.61'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint6_linear_257_65'
								x1='258.467'
								y1='239.258'
								x2='258.467'
								y2='285.125'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint7_linear_257_65'
								x1='248.772'
								y1='157.691'
								x2='248.772'
								y2='244.584'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint8_linear_257_65'
								x1='216.177'
								y1='132.035'
								x2='216.177'
								y2='209.004'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint9_linear_257_65'
								x1='216.381'
								y1='201.162'
								x2='216.381'
								y2='290.346'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint10_linear_257_65'
								x1='184.269'
								y1='189.52'
								x2='184.269'
								y2='306.427'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint11_linear_257_65'
								x1='158.164'
								y1='121.506'
								x2='158.164'
								y2='234.055'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint12_linear_257_65'
								x1='14.4457'
								y1='211.547'
								x2='14.4457'
								y2='290.211'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint13_linear_257_65'
								x1='55.1033'
								y1='136.633'
								x2='55.1033'
								y2='242.405'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint14_linear_257_65'
								x1='99.0354'
								y1='144.677'
								x2='99.0354'
								y2='262.599'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint15_linear_257_65'
								x1='103.191'
								y1='218.008'
								x2='103.191'
								y2='285.391'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint16_linear_257_65'
								x1='123.206'
								y1='0'
								x2='123.206'
								y2='86.651'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint17_linear_257_65'
								x1='127.379'
								y1='68.7402'
								x2='127.379'
								y2='175.722'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
							<linearGradient
								id='paint18_linear_257_65'
								x1='186.186'
								y1='95.7285'
								x2='186.186'
								y2='157.691'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='#F24957' />
								<stop offset='0.5' stopColor='#F24957' />
								<stop offset='0.864583' stopColor='#F2E205' />
								<stop
									offset='0.9998'
									stopColor='#F2E205'
									stopOpacity='0'
								/>
							</linearGradient>
						</defs>
					</svg>
					<Timer
						hideYear={true}
						titlePosition='bottom'
						size='extra-small'
						endAt={'2022-03-20 01:26:58'} // Date/Time
					/>
				</div>
				<div className='flex flex-col gap-y-5 items-center lg:items-start'>
					<h5 className='font-bold text-base underline underline-offset-4 decoration-4 decoration-indigo-500'>
						Links
					</h5>
					<div className='grid grid-cols-1 place-items-center lg:place-items-start gap-3 lg:gap-1 font-light text-sm'>
						<NextLink href='/about'>
							<a className='transition-all duration-300 lg:hover:text-gray-400'>
								About
							</a>
						</NextLink>
						<NextLink href='/sitemap'>
							<a className='transition-all duration-300 lg:hover:text-gray-400'>
								Sitemap
							</a>
						</NextLink>
						<a
							className='transition-all duration-300 lg:hover:text-gray-400'
							href='https://www.privacypolicies.com/live/1731b87a-d077-459e-b5ea-97834b31ec01'
							target='_blank'>
							Privacy Policy
						</a>
						<NextLink href='/gallery'>
							<a className='transition-all duration-300 lg:hover:text-gray-400'>
								Gallery
							</a>
						</NextLink>
					</div>
				</div>
				<div className='mb-10 lg:mb-1 flex flex-col items-center gap-y-5'>
					<h5 className='font-bold text-base underline underline-offset-4 decoration-4 decoration-indigo-500'>
						Reach Us
					</h5>
					<div className='flex flex-row items-center gap-5 lg:hover:text-gray-400 transition-all duration-300'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
						<a
							className='w-60 text-sm'
							href='https://www.google.com/maps/search/?api=1&query=NMIMS+Navi+Mumbai'
							target='_blank'>
							Plot No. 2, Pethapada, Next to Ramsheth Thakur
							College, Sector 33, Kharghar, Navi Mumbai,
							Maharashtra - 410210
						</a>
					</div>
					<div className='flex flex-row items-center gap-5 hover:text-gray-400 transition-all duration-300'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
							/>
						</svg>
						<p
							className='w-60 text-sm hover:cursor-pointer'
							onClick={copyEmail}>
							{isCopied ? (
								<span className='text-green-500'>
									Email copied!
								</span>
							) : (
								'ignite@nmims.edu.in'
							)}
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
