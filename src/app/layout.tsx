import {Poppins} from 'next/font/google'
import SiteHeader from './(client-components)/(Header)/SiteHeader'
import ClientCommons from './ClientCommons'
import '@/app/globals.css'
import '@/styles/index.scss'
import 'rc-slider/assets/index.css'
import FooterNav from '@/components/FooterNav'
import {Metadata} from 'next'
import ThemeProvider from './theme-provider'
import Footer2 from '@/components/Footer2'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300','400','500','600','700'],
})

export const metadata: Metadata = {
	title: 'Escala Terapia',
	description: 'Escala Terapia es una plataforma de terapia online que conecta a terapeutas con pacientes.',
	keywords: 'terapia, terapia online, psicología, salud mental',
	authors: [{name: 'Roger Torres',url: 'https://escalaterapia.com'}],
	creator: 'Roger Torres',
	applicationName: 'Escala Terapia',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
	params: any
}) {
	return (
		<html lang="es" className={poppins.className}>
			<ThemeProvider>
				<body className="bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
					<div>
						<SiteHeader />
						{children}
						<FooterNav />
						<Footer2 />
					</div>
					<ClientCommons />
				</body>
			</ThemeProvider>
		</html>
	)
}
