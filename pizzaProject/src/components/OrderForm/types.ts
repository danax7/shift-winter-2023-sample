import { IPizzaOrder } from '@mainTypes/types'

export interface IFormSignature<T> {
    [key: string]: T
}

export interface IFormValues extends IFormSignature<string | boolean> {
    lastname: string
    firstname: string
    patronymic: string
    nonePatronymic: boolean
    phoneNumber: string
    birthDate: string
    city: string
    street: string
    house: string
    apartment: string
    noneApartment: boolean
    comment: string
}

export interface IFormErrors extends IFormSignature<string | undefined> {
    lastname?: string
    firstname?: string
    patronymic?: string
    nonePatronymic?: string
    phoneNumber?: string
    birthDate?: string
    city?: string
    street?: string
    house?: string
    apartment?: string
    noneApartment?: string
    comment?: string
}

export interface IOrderFormProps {
    onOrderSubmit: (values: IFormValues, orderedPizzas: IPizzaOrder[]) => void
    orderedPizzas: IPizzaOrder[]
}
