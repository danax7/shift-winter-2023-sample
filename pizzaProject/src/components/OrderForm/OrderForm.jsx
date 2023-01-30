import React from 'react'
import { useFormik } from 'formik'
import s from './s.module.css'


const OrderForm = () => {
	const formik = useFormik({
		validateOnChange: false,
		initialValues: {
			surname: '',
			name: '',
			patronymic: '',
			nonePatronymic: false,
			phoneNumber: '',
			birthday: '',
			city: '',
			street: '',
			house: '',
			flat: '',
			noneFlat: false,
			notes: '',
		},
		onSubmit: values => {
			console.log(values)
		},
		validate: values => {
			let errors = {}

			for (let key in values) {
				if (!values[key] && key !== 'notes' && key !== 'nonePatronymic' && key !== 'noneFlat' && key !== 'patronymic' && key !== 'flat') {
					errors[`${key}`] = 'не заполнено поле'
				}
			}

			if (!values.patronymic && !values.nonePatronymic) {
				errors.patronymic = 'введите отчество или поставте галочку'
			}

			if (!values.flat && !values.noneFlat) {
				errors.flat = 'введите квартиру или поставте галочку'
			}

			return errors
		}
	})


	return (
		<div className={s.wrapper}>
			<form onSubmit={formik.handleSubmit}>
				<div className={s.title}>Контактные данные</div>
				<div className={s.section}>

					<input type="text" name='surname' onChange={formik.handleChange} value={formik.values.surname} placeholder='Фамилия' />
					<span className={s.error}>{formik.errors.surname}</span>

					<input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} placeholder='Имя' />
					<span className={s.error}>{formik.errors.name}</span>

					<input type="text" name='patronymic' onChange={formik.handleChange} value={formik.values.patronymic} placeholder='Отчество' />
					<span className={s.error}>{formik.errors.patronymic}</span>
					<input type="checkbox" name="nonePatronymic" onChange={formik.handleChange} checked={formik.values.nonePatronymic} />

					<input type="text" name='phoneNumber' onChange={formik.handleChange} value={formik.values.phoneNumber} placeholder='Телефон' />
					<span className={s.error}>{formik.errors.phoneNumber}</span>

					<input type="text" name='birthday' onChange={formik.handleChange} value={formik.values.birthday} placeholder='Дата рождения' />
					<span className={s.error}>{formik.errors.birthday}</span>

				</div>
				<div className={s.title}>Адрес доставки</div>
				<div className={s.section}>
					<input type="text" name='city' onChange={formik.handleChange} value={formik.values.city} placeholder='Город' />
					<span className={s.error}>{formik.errors.city}</span>

					<input type="text" name='street' onChange={formik.handleChange} value={formik.values.street} placeholder='Улица' />
					<span className={s.error}>{formik.errors.street}</span>

					<input type="text" className={s.house} name='house' onChange={formik.handleChange} value={formik.values.house} placeholder='Дом' />
					<span className={s.error}>{formik.errors.house}</span>

					<input type="text" className={s.flat} name='flat' width='20' onChange={formik.handleChange} value={formik.values.flat} placeholder='Квартира' />
					<input type="checkbox" name="noneFlat" id="noneFlat" onChange={formik.handleChange} checked={formik.values.noneFlat} />
					<span className={s.error}>{formik.errors.flat}</span>

					<input type="text" name='notes' onChange={formik.handleChange} value={formik.values.notes} placeholder='Заметки для курьера' />
				</div>
				<button className={s.send} type='submit'>Отправить заказ</button>
			</form>

		</div>
	)
}

export default OrderForm