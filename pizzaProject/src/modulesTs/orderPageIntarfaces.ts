import { IPizza } from "./selectPageInterfaces"

// todo fetch

export interface IUser {
	firstname: string,
	lastname: string,
	birthDate: string,
	registrationAddress: string
}

export interface IAddress {
	city: string,
	street: string,
	house: string,
	apartment: string,
	comment: string
}

export interface IForm {
	user: IUser
	address: IAddress
}

export interface IPizzaOrder {
	pizza: IPizza,
	quantity: number,
	price: number
}

export interface IBackPizzaOrder {
	id: number,
	size: string,
	crust: string
}


export interface IOrderPizzaDispatchProps {
	getSinglePizza: (id: number) => void,
	increaseQuantity: (id: number) => void,
	decreaseQuantity: (id: number) => void,
	removePizzaOrder: (id: number) => void,
	createOrder: (form: IValues, pizzas: IPizzaOrder[]) => void
}

// todo Form

export interface ISignature<T> {
	[key: string]: T,
}

export interface IValues extends ISignature<string | boolean> {
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


export interface IErrors extends ISignature<string | undefined> {
	lastname?: string,
	firstname?: string,
	patronymic?: string,
	nonePatronymic?: string,
	phoneNumber?: string,
	birthDate?: string,
	city?: string,
	street?: string,
	house?: string,
	apartment?: string,
	noneApartment?: string,
	comment?: string,
}

