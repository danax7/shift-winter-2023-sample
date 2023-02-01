
export interface ISelectPageState {
	pizzas: IPizza[],
	categories: string[],
	currentCategory: string,
	pizzasLoaded: boolean,
	errorLoading: boolean,
	selectedPizzas: number[]
}

export interface IPizza {
	id: number,
	name: string,
	ingredients: string[],
	img: string,
	price: {
		default: number,
		size: {
			small: number,
			medium: number,
			large: number
		},
		crust?: {
			cheesy: number,
			cheesySausage: number
		}
	},
	classifications: {
		new: boolean,
		spicy: boolean,
		vegetarian: boolean
	}
}


