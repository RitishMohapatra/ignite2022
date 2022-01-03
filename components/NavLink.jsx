import NextLink from 'next/link'

export default function NavLink({ page, edge }) {
	const pagePath = page.toLowerCase()

	return (
		<div
			exit={{
				scale: 5,
				transition: {
					duration: 3,
				},
			}}>
			<NextLink href={`/${pagePath === 'home' ? '' : pagePath}`}>
				<a
					className={`${
						edge === 'left'
							? 'origin-left'
							: edge === 'right'
							? 'origin-right'
							: 'origin-center'
					} ${
						pagePath === 'home'
							? 'bg-coffee'
							: pagePath === 'about'
							? 'bg-rich-black'
							: pagePath === 'events'
							? 'bg-jungle-green'
							: pagePath === 'sponsors'
							? 'bg-feldgrau'
							: pagePath === 'contact'
							? 'bg-neutral-700'
							: ''
					} h-full w-full pt-10 px-3 hidden lg:flex flex-col justify-start place-items-center font-bold text-base transition-all`}>
					{page
						.toUpperCase()
						.split('')
						.map((char) => (
							<span key={char}>{char}</span>
						))}
				</a>
			</NextLink>
		</div>
	)
}
