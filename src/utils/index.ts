export interface PricingItem {
	isPopular: boolean
	name: string
	pricing: string
	desc: string
	per: string
	features: string[]
}

export const pricings: PricingItem[] = [
	{
		isPopular: false,
		name: 'Starter',
		pricing: '$9',
		per: '/mes',
		features: [
			'Acceso a 2 formularios clínicos',
			'Hasta 10 respuestas por mes',
			'Visualización básica de resultados',
			'Soporte por correo electrónico',
		],
		desc: 'Ideal para terapeutas que inician y quieren evaluar a sus primeros pacientes.',
	},
	{
		isPopular: true,
		name: 'Profesional',
		pricing: '$19',
		per: '/mes',
		features: [
			'Acceso a todos los formularios clínicos',
			'Respuestas ilimitadas de pacientes',
			'Generación automática de reportes',
			'Soporte prioritario por email',
		],
		desc: 'Perfecto para terapeutas en práctica activa que evalúan a múltiples pacientes al mes.',
	},
	{
		isPopular: false,
		name: 'Avanzado',
		pricing: '$39',
		per: '/mes',
		features: [
			'Todo lo incluido en Profesional',
			'Exportación de datos en PDF y Excel',
			'Análisis estadístico de resultados',
			'Asignación de formularios automática',
			'Atención personalizada por WhatsApp',
		],
		desc: 'Diseñado para clínicas o terapeutas con alto volumen de pacientes y seguimiento detallado.',
	},
];
