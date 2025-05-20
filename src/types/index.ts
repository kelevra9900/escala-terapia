export type Question = {
	id: string;
	text: string;
	type: 'MULTIPLE_CHOICE';
	options: {label: string; value: string | number}[];
};

export type FormTemplate = {
	id: string;
	title: string;
	description: string;
	questions: Question[];
};