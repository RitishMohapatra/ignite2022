import { useState } from 'react'

export default function EventCard({
	img,
	title,
	summary,
	bgCol = 'bg-blue-400',
}) {
	const [showModal, setShowModal] = useState(false)

	// Update all imports

	return (
		<>
			{showModal ? (
				<>
					<div className='sm:p-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-6xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex  justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
									<h3 className='text-3xl font-semibold text-center text-white '>
										Sparkathon
									</h3>
									<button
										className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
										onClick={() => setShowModal(false)}>
										<span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
											x
										</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative p-6 flex-auto'>
									<p className='my-4 text-white  text-lg leading-relaxed'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Molestiae fugiat aut
										libero quasi nisi eos illo, maiores
										voluptatum voluptates doloremque.
									</p>
								</div>
								{/*footer*/}
								<div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
									<button
										className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setShowModal(false)}>
										Close
									</button>
									<button
										className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setShowModal(false)}>
										Register
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
			<div
				className={`${bgCol} p-1 lg:p-3 group flex transform transition-all duration-300 hover:-rotate-3 hover:scale-105 rounded-xl shadow-xl`}>
				<div className='p-1 lg:p-3 flex flex-row items-center transform transition-all duration-300 group-hover:rotate-3 relative'>
					<img src={img} className='h-40 flex-shrink-0' />
					<div className='h-full p-1 lg:p-3 flex flex-col justify-start gap-y-3'>
						<h2 className='font-bold text-lg lg:text-xl text-left'>
							{title}
						</h2>
						<p className='text-sm lg:text-base text-left'>
							{summary}
						</p>
					</div>
					<button
						onClick={() => setShowModal(true)}
						className='absolute bottom-2 right-2 px-3 py-2 flex flex-row items-center gap-x-1 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-lg'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>{' '}
						Read more
					</button>
				</div>
			</div>
		</>
	)
}
