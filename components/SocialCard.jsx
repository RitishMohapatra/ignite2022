export default function SocialCard({
	text,
	col = 'bg-transparent lg:hover:bg-transparent',
	link = '',
	textcol = 'lg:text-white',
	children,
}) {
	return (
		<a
			className={`h-full w-full aspect-video p-3 group flex flex-col justify-around items-center ${col} ${textcol} lg:bg-transparent transition-all duration-75 lg:group-hover:duration-300 rounded-xl relative`}
			href={link}
			target='_blank'>
			<div className='lg:group-hover:-translate-y-3 transform transition-all duration-300'>
				{children}
			</div>
			<p className='p-3 font-semibold lg:invisible lg:group-hover:visible transition-all duration-75 lg:group-hover:duration-300'>
				{text}
			</p>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='absolute top-2 right-2 h-5 lg:invisible lg:group-hover:visible duration-75 lg:group-hover:duration-300'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
				/>
			</svg>
		</a>
	)
}
