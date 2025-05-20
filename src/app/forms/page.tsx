"use client"

import {useState} from "react";

import {DynamicFormRenderer} from "@/components/FormRenderer";
import {mockBAIFormTemplate} from "@/utils/mockFormTemplate";


const PageForms = () => {
	const [formTemplate] = useState(mockBAIFormTemplate);

	const handleSubmit = async (answers: Record<string,string>) => {
		console.log("Respuestas enviadas:",answers);
	}
	return (
		<div className="nc-PageForms max-w-3xl mx-auto py-12">
			<DynamicFormRenderer formTemplate={formTemplate} onSubmit={handleSubmit} />
		</div>
	)
}

export default PageForms