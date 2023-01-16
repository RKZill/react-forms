import React, { useRef } from 'react'
import { FormData, FormDefinition, FormState, initFormState } from '../formbuilder/FormBuilderTypes'
import { FormBuilder } from '../formbuilder/FormBuilder'

export function useReactForms<FormT, LanguageT extends string | undefined = undefined>(formDefinition: FormDefinition<FormT, LanguageT>, initialFormData: FormData<FormT> = {}, initialLanguage: LanguageT | undefined = undefined): FormBuilder<FormT, LanguageT> {
	const [formData, setFormData] = React.useState(initialFormData)
	const [formState, setFormState] = React.useState<FormState<FormT, LanguageT>>(initFormState(initialFormData, initialLanguage))

	const formBuilderRef = useRef(new FormBuilder(formDefinition, formData, formState, setFormData, setFormState))

	return formBuilderRef.current
}

export default useReactForms
