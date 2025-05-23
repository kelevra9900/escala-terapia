import React from 'react'
import { ReactNode } from 'react'

export interface Heading2Props {
	heading?: ReactNode
	subHeading?: ReactNode
	className?: string
}

const Heading2: React.FC<Heading2Props> = ({
	className = '',
	heading = 'Stays in Tokyo',
	subHeading,
}) => {
	return (
		<div className={`mb-12 lg:mb-16 ${className}`}>
			<h2 className="text-4xl font-semibold">{heading}</h2>
			{subHeading ? (
				subHeading
			) : (
				<span className="mt-3 block text-neutral-500 dark:text-neutral-400">
					<span>233 stays</span>
					<span className="mx-2">·</span>
					<span>Aug 12 - 18</span>
					<span className="mx-2">·</span>
					<span>2 Guests</span>
				</span>
			)}
		</div>
	)
}

export default Heading2
