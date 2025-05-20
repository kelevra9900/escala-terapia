import React,{FC} from 'react'
import Logo from '@/shared/Logo'
import MenuBar from '@/shared/MenuBar'
import LangDropdown from './LangDropdown'
import NotifyDropdown from './NotifyDropdown'
import AvatarDropdown from './AvatarDropdown'
import HeroSearchForm2MobileFactory from '../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory'

export interface MainNav2Props {
	className?: string
}

const MainNav2: FC<MainNav2Props> = ({className = ''}) => {
	return (
		<div className={`MainNav2 relative z-10 ${className}`}>
			<div className="flex h-20 justify-between px-4 lg:container">
				<div className="hidden flex-1 justify-start gap-x-3 sm:gap-x-8 md:flex lg:gap-x-10">
					<Logo className="w-24 self-center" />
					<div className="hidden h-7 self-center border-s border-neutral-300 dark:border-neutral-600 lg:block"></div>
				</div>

				<div className="!mx-auto max-w-lg flex-[3] self-center md:px-3 lg:hidden">
					{/* <HeroSearchForm2MobileFactory /> */}
				</div>

				<div className="hidden flex-1 flex-shrink-0 justify-end text-neutral-700 dark:text-neutral-100 md:flex lg:flex-none">
					<div className="hidden gap-x-1 lg:flex">
						<LangDropdown />
						<NotifyDropdown />
						<AvatarDropdown />
					</div>
					<div className="flex gap-x-2 lg:hidden">
						<NotifyDropdown />
						<AvatarDropdown />
						<MenuBar />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainNav2
