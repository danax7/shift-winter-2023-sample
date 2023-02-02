export interface IAction {
    type: string
    payload?: any
}

export interface IPizza {
    id: number
    name: string
    ingredients: string[]
    img: string
    price: {
        default: number
        size: {
            small: number
            medium: number
            large: number
        }
        crust?: {
            cheesy: number
            cheesySausage: number
        }
    }
    classifications: {
        new: boolean
        spicy: boolean
        vegetarian: boolean
    }
}


export interface IPizzaOrder {
    pizza: IPizza,
    quantity: number,
    price: number
}