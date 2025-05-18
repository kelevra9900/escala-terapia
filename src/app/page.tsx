import React from 'react'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import {TaxonomyType} from '@/data/types'
import BackgroundSection from '@/components/BackgroundSection'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import SectionVideos from '@/components/SectionVideos'
import SectionClientSay from '@/components/SectionClientSay'


function PageHome() {
	return (
		<main className="nc-PageHome relative overflow-hidden">
			<BgGlassmorphism />

			<div className="container relative mb-24 space-y-24 lg:mb-28 lg:space-y-28">


				<SectionHowItWork />


				<SectionSubscribe2 />

				<div className="relative py-16">
					<BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20" />
					<SectionGridAuthorBox />
				</div>

				<SectionGridCategoryBox />

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
