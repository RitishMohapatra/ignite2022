// Partial responsive

import {
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineYoutube,
	AiOutlineWhatsApp,
	AiOutlineMail,
} from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
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
							col='bg-pink-500 lg:hover:bg-pink-500'
							url='https://www.instagram.com/nmignite/'>
							<AiOutlineInstagram className='h-40 w-40' />
						</SocialCard>
						<SocialCard
							text='Follow the trend.'
							col='bg-cyan-500 lg:hover:bg-cyan-500'
							url='https://twitter.com/nmignite'>
							<AiOutlineTwitter className='h-40 w-40' />
						</SocialCard>
						<SocialCard
							text='Join the server.'
							col='bg-indigo-500 lg:hover:bg-indigo-500'
							url='https://discord.com/invite/3vBamUsdvY'>
							<SiDiscord className='h-40 w-40' />
						</SocialCard>
						<SocialCard
							text='Catch us live.'
							col='bg-rose-500 lg:hover:bg-rose-500'
							url='https://www.youtube.com/channel/UCNxk4RPg_wm0A_4v3dmji4w'>
							<AiOutlineYoutube className='h-40 w-40' />
						</SocialCard>
						<SocialCard
							text='Check your DMs.'
							col='bg-green-500 lg:hover:bg-green-500'
							url=''>
							<AiOutlineWhatsApp className='h-40 w-40' />
						</SocialCard>
						<SocialCard
							text='Those Emails.'
							col='bg-white lg:hover:bg-white'
							textcol='text-black lg:hover:text-black'
							url=''>
							<AiOutlineMail className='h-40 w-40' />
						</SocialCard>
					</SocialContainer>
				</PageContainer>
			</div>
		</>
	)
}

export default withTransition(Contact)
