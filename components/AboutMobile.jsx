export default function AboutMobile({ title, desc, url, imgurl }) {
	return (
		<div>
			<div className='max-w-md py-4 px-8 bg-jungle-green shadow-lg m-5 rounded-lg my-20'>
				<div className='flex justify-center md:justify-end -mt-16'>
					<img
						className='w-24 h-30 object-cover rounded-full '
						src={imgurl}
					/>
				</div>
				<div>
					<h2 className='text-white text-3xl font-semibold'>
						{title}
					</h2>
					<p className='mt-2 text-white'>{desc}</p>
				</div>
				<div className='flex justify-end mt-4'>
					<a
						href={url}
						className='text-xl font-medium text-indigo-500'>
						{title}
					</a>
				</div>
			</div>
		</div>
	)
}
