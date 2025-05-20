import React from 'react'
import ButtonPrimary from '@/shared/ButtonPrimary'

const AccountBilling = () => {
	return (
		<div className="space-y-6 sm:space-y-8">
			{/* HEADING */}
			<h2 className="text-3xl font-semibold">
				Pagos y cobros
			</h2>
			<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
			<div className="max-w-2xl">
				<span className="block text-xl font-semibold">
					Métodos de pago
				</span>
				<br />
				<span className="block text-neutral-700 dark:text-neutral-300">
					{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue dolor quis convallis luctus. Maecenas ornare nulla turpis, sed tristique magna finibus in`}
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue dolor quis convallis luctus. Maecenas ornare nulla turpis, sed tristique magna finibus in
				</span>
				<div className="pt-10">
					<ButtonPrimary>Agregar método de pago</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}

export default AccountBilling
