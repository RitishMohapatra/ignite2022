import PageContainer from 'components/PageContainer'
import NavContainer from 'components/NavContainer'
import NavLink from 'components/NavLink'
import Gallery from 'components/Gallery'
import Navbar from 'components/Navbar'
import AboutMobile from 'components/AboutMobile'
import withTransition from 'HOC/withTransition'

function About() {
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
				<NavContainer>
					<NavLink page='home' edge='left' />
					<NavLink page='about' edge='right' />
				</NavContainer>

				<PageContainer title='About'>
					<section className='w-3/4 font-semibold text-center text-lg'>
						IGNITE is the annual technical festival of NMIMS, Navi
						Mumbai. We started in the year 2019 with the aim to give
						a platform for the technologies of future and also to
						have a time of their lives amidst the perfect blend of
						amusement and illuminations for a better tomorrow.
					</section>
					<Gallery />
					<div className='md:hidden'>
						<AboutMobile
							title='Ignite 1.0'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!'
							url='www.geeksforgeeks.com'
							imgurl='https://i.ibb.co/nc9GsKL/Layer-1-2-1.png'
						/>
						<AboutMobile
							title='Ignite 2.0'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!'
							url='www.geeksforgeeks.com'
							imgurl='https://i.ibb.co/nc9GsKL/Layer-1-2-1.png'
						/>
						<AboutMobile
							title='Ignite 3.0'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!'
							url='www.geeksforgeeks.com'
							imgurl='https://i.ibb.co/nc9GsKL/Layer-1-2-1.png'
						/>
						<AboutMobile
							title='Ignite 2022'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!'
							url='www.geeksforgeeks.com'
							imgurl='https://i.ibb.co/nc9GsKL/Layer-1-2-1.png'
						/>
					</div>
				</PageContainer>

				<NavContainer>
					<NavLink page='events' edge='left' />
					<NavLink page='sponsors' edge='' />
					<NavLink page='contact' edge='right' />
				</NavContainer>
			</div>
		</>
	)
}

export default withTransition(About)
