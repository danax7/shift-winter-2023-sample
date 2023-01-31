import React from 'react'
import { useFormik } from 'formik'
import s from './s.module.css'
import { defaultValues, getErrors, IValues, } from './formHelpers'
import { IPizzaOrder } from '../../modulesTs/interfaces'
import ErrorField from '../ErrorField/ErrorField'

interface IOrderFormProps {
	onOrderSubmit: (values: IValues, orderedPizzas: IPizzaOrder[]) => void,
	orderedPizzas: IPizzaOrder[]
}

const OrderForm = ({ onOrderSubmit, orderedPizzas }: IOrderFormProps) => {
	const formik = useFormik({
		initialValues: defaultValues,
		onSubmit: values => {
			onOrderSubmit(values, orderedPizzas)
		},
		validate: values => {
			return getErrors(values)
		}
	})


	return (
		<div className={s.wrapper}>
			<form onSubmit={formik.handleSubmit}>
				<div className={s.section}>
					<div className={s.title}>Контактные данные</div>
					<div className={s.inputs}>
						<div className={s.top}>
							<ErrorField value={formik.values.lastname} error={formik.errors.lastname} handleChange={formik.handleChange}
								inputName='lastname' placeholder='Фамилия' />


							<ErrorField value={formik.values.firstname} error={formik.errors.firstname} handleChange={formik.handleChange}
								inputName='firstname' placeholder='Имя' />

							<input type="text" name='patronymic' onChange={formik.handleChange} disabled={formik.values.nonePatronymic}
								value={formik.values.patronymic} placeholder='Отчество' />
							<div className={s.errorWrapper}>
								<input type="checkbox" id='nonePatronymic' name="nonePatronymic" onChange={formik.handleChange} checked={formik.values.nonePatronymic} />
								<label htmlFor='nonePatronymic'>нет отчества</label>
								{formik.errors.patronymic ? <span className={s.error}>{formik.errors.patronymic}</span> : ''}
							</div>
						</div>

						<div className={s.bottom}>
							<ErrorField value={formik.values.phoneNumber} error={formik.errors.phoneNumber} handleChange={formik.handleChange}
								inputName='phoneNumber' placeholder='Телефон' />

							<ErrorField value={formik.values.birthDate} error={formik.errors.birthDate} handleChange={formik.handleChange}
								inputName='birthDate' placeholder='Дата рождения' />
						</div>
					</div>
				</div>
				<div className={s.section}>
					<div className={s.title}>Адрес доставки</div>
					<div className={s.inputs}>
						<div className={s.top}>
							<ErrorField value={formik.values.city} error={formik.errors.city} handleChange={formik.handleChange}
								inputName='city' placeholder='Город' />

							<ErrorField value={formik.values.street} error={formik.errors.street} handleChange={formik.handleChange}
								inputName='street' placeholder='Улица' />

							<ErrorField value={formik.values.house} error={formik.errors.house} handleChange={formik.handleChange}
								inputName='house' placeholder='Дом' />

							<input type="text" className={s.apartment} name='apartment' disabled={formik.values.noneApartment}
								onChange={formik.handleChange} value={formik.values.apartment} placeholder='Квартира' />
							<div className={s.errorWrapper}>
								<input type="checkbox" name="noneApartment" id="noneApartment" onChange={formik.handleChange} checked={formik.values.noneApartment} />
								<label htmlFor='noneApartment'>нет квартиры</label>
								{formik.errors.apartment ? <span className={s.error}>{formik.errors.apartment}</span> : ''}
							</div>
						</div>

						<textarea className={s.comment} type="text" name='comment' onChange={formik.handleChange} value={formik.values.comment} placeholder='Заметки для курьера' />
					</div>
				</div>
				<button className={s.send} type='submit'>Отправить заказ</button>
			</form>

		</div>
	)
}

export default OrderForm