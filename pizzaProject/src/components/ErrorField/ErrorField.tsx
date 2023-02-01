import React from 'react'
import s from './s.module.css'

interface ErrorFieldProps {
	handleChange: (e: React.FormEvent<HTMLInputElement>) => void,
	value: string,
	error: string | undefined,
	inputName: string,
	placeholder: string,
	inputClass?: string
}

const ErrorField = ({ handleChange, value, error, inputName, placeholder, inputClass }: ErrorFieldProps) => {
	console.log(inputClass)

	return (
		<div className={s.errorWrapper}>
			<input className={inputClass ? inputClass : ''} type="text" name={inputName} onChange={handleChange} value={value} placeholder={placeholder} />
			{error ? <span className={s.error}>{error}</span> : ''}
		</div>
	)
}

export default ErrorField