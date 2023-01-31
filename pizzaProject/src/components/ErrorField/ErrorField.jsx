import React from 'react'
import s from './s.module.css'


const ErrorField = ({ handleChange, value, error, inputName, placeholder }) => {
	return (
		<div className={s.errorWrapper}>
			<input type="text" name={inputName} onChange={handleChange} value={value} placeholder={placeholder} />
			{error ? <span className={s.error}>{error}</span> : ''}
		</div>
	)
}

export default ErrorField