import React from 'react'
import s from './s.module.css'


const OrangeButton = ({ content }) => {
	return (
		<div className={s.btn}>
			{content}
		</div>
	)
}

export default OrangeButton