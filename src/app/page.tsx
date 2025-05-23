import React from 'react'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import {CheckIcon} from '@heroicons/react/24/solid'
import BackgroundSection from '@/components/BackgroundSection'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import SectionVideos from '@/components/SectionVideos'
import SectionClientSay from '@/components/SectionClientSay'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonSecondary from '@/shared/ButtonSecondary'
import SectionHero2 from './(server-components)/SectionHero2'
import {PricingItem,pricings} from '@/utils'

const renderPricingItem = (pricing: PricingItem,index: number) => {
	return (
		<div
			key={index}
			className={`relative flex h-full flex-col overflow-hidden rounded-3xl border-2 px-6 py-8 ${pricing.isPopular
				? 'border-primary-500'
				: 'border-neutral-100 dark:border-neutral-700'
				}`}
		>
			{pricing.isPopular && (
				<span className="absolute end-3 top-3 z-10 rounded-full bg-primary-500 px-3 py-1 text-xs tracking-widest text-white">
					Popular
				</span>
			)}
			<div className="mb-8">
				<h3 className="mb-2 block text-sm font-medium uppercase tracking-widest text-neutral-600 dark:text-neutral-300">
					{pricing.name}
				</h3>
				<h2 className="flex items-center text-5xl leading-none text-neutral-900 dark:text-neutral-300">
					<span>{pricing.pricing}</span>
					<span className="ms-1 text-lg font-normal text-neutral-500">
						{pricing.per}
					</span>
				</h2>
			</div>
			<nav className="mb-8 space-y-4">
				{pricing.features.map((item,index) => (
					<li className="flex items-center" key={index}>
						<span className="me-4 inline-flex flex-shrink-0 text-primary-600">
							<CheckIcon className="h-5 w-5" aria-hidden="true" />
						</span>
						<span className="text-neutral-700 dark:text-neutral-300">
							{item}
						</span>
					</li>
				))}
			</nav>
			<div className="mt-auto flex flex-col">
				{pricing.isPopular ? (
					<ButtonPrimary>Enviar</ButtonPrimary>
				) : (
					<ButtonSecondary>
						<span className="font-medium">Enviar</span>
					</ButtonSecondary>
				)}
				<p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
					{pricing.desc}
				</p>
			</div>
		</div>
	)
}

function PageHome() {
	return (
		<main className="nc-PageHome relative overflow-hidden">
			<BgGlassmorphism />

			<div className="container relative mb-24 space-y-24 lg:mb-28 lg:space-y-28">
				<SectionHero2 className="" />


				<SectionHowItWork />


				<div className={`nc-PageSubcription container pb-24 lg:pb-32`}>
					<header className="mx-auto my-20 max-w-2xl text-center">
						<h2 className="flex items-center justify-center text-3xl font-semibold leading-[115%] text-neutral-900 dark:text-neutral-100 md:text-5xl md:leading-[115%]">
							<span className="me-4 text-3xl leading-none md:text-4xl">💎</span>
							Suscripciones
						</h2>
						<span className="mt-2 block text-sm text-neutral-700 dark:text-neutral-200 sm:text-base">
							Pricing to fit the needs of any companie size.
						</span>
					</header>
					<section className="overflow-hidden text-sm text-neutral-600 md:text-base">
						<div className="grid gap-5 lg:grid-cols-3 xl:gap-8">
							{pricings.map(renderPricingItem)}
						</div>
					</section>
				</div>

				<SectionSubscribe2 />

				<div className="relative py-16">
					<BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20" />
					<SectionGridAuthorBox />
				</div>

				<div className="relative py-16">
					<BackgroundSection />
					<SectionBecomeAnAuthor />
				</div>
				<SectionVideos />

				<div className="relative py-16">
					<BackgroundSection />
					<SectionClientSay />
				</div>
			</div>
		</main>
	)
}

export default PageHome
