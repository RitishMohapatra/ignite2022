// Partial responsive
import { AiOutlineMail } from 'react-icons/ai'
import {
	FaInstagram,
	FaTwitter,
	FaDiscord,
	FaYoutube,
	FaWhatsapp,
} from 'react-icons/fa'
import PageContainer from 'components/PageContainer'
import NavContainer from 'components/NavContainer'
import NavLink from 'components/NavLink'
import SocialContainer from 'components/SocialContainer'
import SocialCard from 'components/SocialCard'
import Navbar from 'components/Navbar'
import withTransition from 'HOC/withTransition'

function Contact() {
	return (
		<>
			<Navbar />
			<div className='h-full flex flex-row'>
				<NavContainer>
					<NavLink page='home' edge='left' />
					<NavLink page='about' edge='' />
					<NavLink page='events' edge='' />
					<NavLink page='sponsors' edge='' />
					<NavLink page='contact' edge='right' />
				</NavContainer>

				<PageContainer title='Contact'>
					<SocialContainer>
						<SocialCard
							text='Heart that post.'
							col='bg-pink-500 lg:hover:bg-gradient-to-bl lg:hover:from-pink-500 lg:hover:via-red-500 lg:hover:to-yellow-500'
							url='https://www.instagram.com/nmignite/'>
							<FaInstagram className='h-20 w-20 mx-auto' />
						</SocialCard>
						<SocialCard
							text='Follow the trend.'
							col='bg-sky-500 lg:hover:bg-sky-500'
							url='https://twitter.com/nmignite'>
							<FaTwitter className='h-20 w-20 mx-auto' />
						</SocialCard>
						<SocialCard
							text='Join the server.'
							col='bg-indigo-500 lg:hover:bg-indigo-500'
							url='https://discord.com/invite/3vBamUsdvY'>
							<FaDiscord className='h-20 w-20 mx-auto' />
						</SocialCard>
						<SocialCard
							text='Catch us live.'
							col='bg-red-600 lg:hover:bg-red-600'
							url='https://www.youtube.com/channel/UCNxk4RPg_wm0A_4v3dmji4w'>
							<FaYoutube className='h-20 w-20 mx-auto' />
						</SocialCard>
						<SocialCard
							text='Check your DMs.'
							// https://wa.me/<number>
							col='bg-green-500 lg:hover:bg-green-500'
							url=''>
							<FaWhatsapp className='h-20 w-20 mx-auto' />
						</SocialCard>
						<SocialCard
							text='Those Emails.'
							col='bg-black lg:hover:bg-black'
							textcol='text-white lg:hover:text-white'
							url=''>
							<AiOutlineMail className='h-20 w-20 mx-auto' />
						</SocialCard>
					</SocialContainer>
				</PageContainer>
			</div>
		</>
	)
}

export default withTransition(Contact)
