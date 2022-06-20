import { Activatable } from "../common"

export interface InputProps<T> extends Activatable {
	id: string
	value: T | undefined | null
	onChange: (val: T | null) => void
	label?: string
	errorMessage?: string
	required?: boolean
}

export interface SelectOption<T extends string | number> {
	value: T
	text: string
}
