'use client'

import React, { FC, useState } from 'react'
import LocationInput from '../LocationInput'
import RentalCarDatesRangeInput from './RentalCarDatesRangeInput'
import T from '@/utils/getT'

export interface RentalCarSearchFormProps {}

const RentalCarSearchForm: FC<RentalCarSearchFormProps> = ({}) => {
	const [dropOffLocationType, setDropOffLocationType] = useState<
		'same' | 'different'
	>('different')

	const renderRadioBtn = () => {
		return (
			<div className="nc-hero-field-padding flex flex-row flex-wrap items-center border-b border-neutral-100 py-5 dark:border-neutral-700">
				<div
					className={`my-1 me-2 flex cursor-pointer items-center rounded-full px-4 py-1.5 text-xs font-medium sm:me-3 ${
						dropOffLocationType === 'different'
							? 'bg-black text-white shadow-lg shadow-black/10'
							: 'border border-neutral-300 dark:border-neutral-700'
					}`}
					onClick={(e) => setDropOffLocationType('different')}
				>
					{T['HeroSearchForm']['Different drop off']}
				</div>
				<div
					className={`my-1 me-2 flex cursor-pointer items-center rounded-full px-4 py-1.5 text-xs font-medium sm:me-3 ${
						dropOffLocationType === 'same'
							? 'bg-black text-white shadow-lg shadow-black/10'
							: 'border border-neutral-300 dark:border-neutral-700'
					}`}
					onClick={(e) => setDropOffLocationType('same')}
				>
					{T['HeroSearchForm']['Same drop off']}
				</div>
			</div>
		)
	}

	const isDdropOffdifferent = dropOffLocationType === 'different'

	return (
		<form className="relative mt-8 w-full rounded-[40px] rounded-t-2xl bg-white shadow-xl dark:bg-neutral-800 dark:shadow-2xl xl:rounded-[49px] xl:rounded-t-3xl">
			{renderRadioBtn()}
			<div className={`relative flex flex-row`}>
				<LocationInput
					placeHolder={T['HeroSearchForm']['City or Airport']}
					desc={T['HeroSearchForm']['Pick up location']}
					className="flex-1"
				/>
				{isDdropOffdifferent && (
					<>
						<div className="h-8 self-center border-r border-slate-200 dark:border-slate-700"></div>
						<LocationInput
							placeHolder={T['HeroSearchForm']['City or Airport']}
							desc={T['HeroSearchForm']['Drop off location']}
							className="flex-1"
							divHideVerticalLineClass="-inset-x-0.5"
						/>
					</>
				)}
				<div className="h-8 self-center border-r border-slate-200 dark:border-slate-700"></div>
				<RentalCarDatesRangeInput className="flex-1" />
			</div>
		</form>
	)
}

export default RentalCarSearchForm
