'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {FormTemplate} from '@/types';

interface Props {
	formTemplate: FormTemplate;
	onSubmit: (data: Record<string,string>) => void;
}

export const DynamicFormRenderer = ({formTemplate,onSubmit}: Props) => {
	const [formData,setFormData] = useState<Record<string,string>>({});

	const handleChange = (questionId: string,value: string) => {
		setFormData((prev) => ({
			...prev,
			[questionId]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<motion.form
			onSubmit={handleSubmit}
			className="space-y-8 p-6 rounded-lg shadow-md bg-surface text-base"
			initial={{opacity: 0,y: 20}}
			animate={{opacity: 1,y: 0}}
			transition={{duration: 0.4}}
		>
			<h2 className="text-xl font-semibold">📝 {formTemplate.title}</h2>
			<p className="text-sm text-muted">💡 {formTemplate.description}</p>

			{formTemplate.questions.map((question) => (
				<div key={question.id} className="space-y-2">
					<p className="font-medium">{question.text}</p>
					<div className="flex flex-wrap gap-14">
						{question.options.map((opt,i) => (
							<label key={i} className="flex items-center gap-2 text-sm mt-4">
								<input
									type="radio"
									name={question.id}
									value={opt.value}
									checked={formData[question.id] === String(opt.value)}
									onChange={() => handleChange(question.id,String(opt.value))}
									className="accent-[rgb(var(--c-primary-600))]"
								/>
								<span>{opt.label}</span>
							</label>
						))}
					</div>
				</div>
			))}

			<button
				type="submit"
				className="bg-[rgb(var(--c-primary-600))] text-white px-4 py-2 rounded hover:bg-[rgb(var(--c-primary-700))]"
			>
				Enviar respuestas
			</button>
		</motion.form>

	);
};
