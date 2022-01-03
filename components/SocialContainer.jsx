import { motion } from 'framer-motion'

export default function SocialContainer({ children }) {
	return (
		<div className='w-full lg:w-3/4 grid place-items-center'>
			<motion.div className='w-full p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2 auto-rows-fr place-items-center gap-10'>
				{children}
			</motion.div>
		</div>
	)
}
