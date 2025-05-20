'use client'

import React,{FC} from 'react'
import T from '@/utils/getT'

export interface StayDatesRangeInputProps {
	className?: string
}

const StayDatesRangeInput: FC<StayDatesRangeInputProps> = ({
	className = '',
}) => {


	return (
		<div>
			<div className="p-5">
				<span className="block text-xl font-semibold sm:text-2xl">
					{T['HeroSearchForm']["When's your trip?"]}
				</span>
			</div>
			<div
				className={`relative z-10 flex flex-shrink-0 justify-center py-5 ${className} `}
			>
			</div>
		</div>
	)
}

export default StayDatesRangeInput
