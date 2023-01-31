
const ddFeb = "(0[1-9]|[12]\\d)";
const mmFeb = "02";
const dd = "(0[1-9]|[12]\\d|3[01])";
const mm = "(0[13-9]|1[0-2])";
const dd_mm = `(${ddFeb}\\.${mmFeb}|${dd}\\.${mm})`;

export const nameRegexp = new RegExp('^[A-ZА-Я][a-zа-я]{1,29}$')
export const cityRegexp = new RegExp('^[a-zа-яA-ZА-Я]{2,50}$')
export const streetRegexp = new RegExp('^[a-zа-яA-ZА-Я]{2,60}$')
export const houseRegexp = new RegExp('^[0-9]{1,10}$')
export const phoneRegexp = new RegExp('^(\\+)?[0-9]{11}$')
export const dateRegexp = new RegExp(`${dd_mm}\\.(19\\d\\d|20([01]\\d|2[0-3]))$`)

export interface IValues {
	lastname: string,
	firstname: string,
	patronymic: string,
	nonePatronymic: boolean,
	phoneNumber: string,
	birthDate: string,
	city: string,
	street: string,
	house: string,
	apartment: string,
	noneApartment: boolean,
	comment: string,
}

export const defaultValues = {
	lastname: '',
	firstname: '',
	patronymic: '',
	nonePatronymic: false,
	phoneNumber: '',
	birthDate: '',
	city: '',
	street: '',
	house: '',
	apartment: '',
	noneApartment: false,
	comment: '',
}


export interface IErrors {
	lastname?: string,
	firstname?: string,
	patronymic?: string,
	nonePatronymic?: boolean,
	phoneNumber?: string,
	birthDate?: string,
	city?: string,
	street?: string,
	house?: string,
	apartment?: string,
	noneApartment?: boolean,
	comment?: string,
}

export const getErrors = (values: IValues): IErrors => {
	let errors = { ...defaultValues }

	for (let key in values) {
		if (values[`${key}`] === '' && key !== 'comment' && key !== 'nonePatronymic' && key !== 'noneApartment' && key !== 'patronymic' && key !== 'apartment') {
			errors[`${key}`] = 'заполните поле'
		}
	}

	if (!values.patronymic && !values.nonePatronymic) {
		errors.patronymic = 'введите отчество или поставте галочку'
	} else if (values.patronymic && !values.nonePatronymic && !nameRegexp.test(values.patronymic)) {
		errors.patronymic = 'не валидное отчество'
	}

	if (!values.apartment && !values.noneApartment) {
		errors.apartment = 'введите квартиру или поставте галочку'
	} else if (!values.noneApartment && values.apartment && !houseRegexp.test(values.apartment)) {
		errors.apartment = 'не валидная квартира'
	}

	if (!nameRegexp.test(values.firstname) && values.firstname) {
		errors.firstname = 'не валидное имя'
	}

	if (!nameRegexp.test(values.lastname) && values.lastname) {
		errors.lastname = 'не валидная фамилия'
	}

	if (!phoneRegexp.test(values.phoneNumber) && values.phoneNumber) {
		errors.phoneNumber = 'не валидный телефон'
	}

	if (!cityRegexp.test(values.city) && values.city) {
		errors.city = 'не валидный город'
	}

	if (!streetRegexp.test(values.street) && values.street) {
		errors.street = 'не валидная улица'
	}

	if (!houseRegexp.test(values.house) && values.house) {
		errors.house = 'не валидный дом'
	}

	if (!dateRegexp.test(values.birthDate) && values.birthDate) {
		errors.birthDate = 'не валидная дата'
	}

	return errors
}