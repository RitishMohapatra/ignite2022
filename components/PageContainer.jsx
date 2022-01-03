import Footer from 'components/Footer'

export default function PageContainer({
	children,
	title,
	start = true,
	footer = true,
}) {
	return (
		<div
			className={`min-h-screen w-full flex flex-col ${
				start ? 'justify-start' : 'justify-between'
			} items-center gap-y-20 overflow-y-scroll no-scrollbar`}>
			{title?.length > 0 && (
				<div className='w-full py-5 md:py-3 flex flex-row justify-center items-center gap-x-5'>
					<img
						src='/logo/fire.svg'
						className='h-12 md:h-14 lg:h-16 bg-transparent'
					/>
					<h1 className='text-xl md:text-4xl'>{title}</h1>
				</div>
			)}
			{children}
			{footer && <Footer />}
		</div>
	)
}
