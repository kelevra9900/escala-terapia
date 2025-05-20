import {FormTemplate} from "@/types";

export const mockBAIFormTemplate: FormTemplate = {
	id: 'form-bai-001',
	title: 'Inventario de Ansiedad de Beck (BAI)',
	description:
		'A continuación se presenta una lista de síntomas comunes de la ansiedad. Indique cuánto le ha afectado cada uno en la última semana (incluyendo hoy).',
	questions: Array.from({length: 21},(_,i) => {
		const symptoms = [
			'Torpe o entumecido',
			'Acalorado',
			'Con temblor en las piernas',
			'Incapaz de relajarse',
			'Con temor a que ocurra lo peor',
			'Mareado o que se le va la cabeza',
			'Con latidos del corazón fuertes y acelerados',
			'Inestable',
			'Atemorizado o asustado',
			'Nervioso',
			'Con sensación de bloqueo',
			'Con temblores en las manos',
			'Inquieto, inseguro',
			'Con miedo a perder el control',
			'Con sensación de ahogo',
			'Con temor a morir',
			'Con miedo',
			'Con problemas digestivos',
			'Con desvanecimientos',
			'Con rubor facial',
			'Con sudores fríos o calientes',
		];

		return {
			id: `q${i + 1}`,
			text: symptoms[i],
			type: 'MULTIPLE_CHOICE' as const,
			order: i + 1,
			options: [
				{label: 'En absoluto',value: 0},
				{label: 'Levemente',value: 1},
				{label: 'Moderadamente',value: 2},
				{label: 'Severamente',value: 3},
			],
		};
	}),
};
