import AllTickets from '../../tickets_example/tickets.json';

const initialState = {
	aviatickets: AllTickets.tickets,
	currencyRub: true,
	currencyUsd: false,
	currencyEur: false, 
	allStops: false,
	withoutStops: false,
	oneStops: false,
	twoStops: false,
	threeStops: false,
	showAviatickets: []
}

export const rootReducer = (state = initialState, action) => {
	switch( action.type ) {
		case 'SELECT_CURRENCY':

			let toggleRub = state.currencyRub, toggleUsd = state.currencyUsd, toggleEur = state.currencyEur

				if (action.event.target.value === 'RUB' && state.currencyRub === false ) {
					toggleRub = !state.currencyRub
					toggleEur = false
					toggleUsd = false	
				}

				if (action.event.target.value === 'USD' && state.currencyUsd === false) {
					toggleUsd = !state.currencyUsd
					toggleEur = false	
					toggleRub = false
				}
				
				if (action.event.target.value === 'EUR' && state.currencyEur === false ) {
					toggleEur = !state.currencyEur
					toggleRub = false
					toggleUsd = false	
				}

			return {
				...state,
				currencyRub: toggleRub,
				currencyUsd: toggleUsd,
				currencyEur: toggleEur
			}
		case 'SELECT_STOP':
			let filterShowAviatickets = [ ...state.showAviatickets ]

			if ( action.event.target.checked === true && action.event.target.value === 'withoutStops') {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 0 ) 
				]
			}

			if ( action.event.target.checked === false && action.event.target.value === 'withoutStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 0 ) 
				]
			}
			
			if ( action.event.target.checked === true && action.event.target.value === 'oneStops' ) {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 1 ) 
				]
			}

			if ( action.event.target.checked === false && action.event.target.value === 'oneStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 1 ) 
				]
			}
						
			if ( action.event.target.checked === true && action.event.target.value === 'twoStops' ) {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 2 ) 
				]
			}

			if ( action.event.target.checked === false && action.event.target.value === 'twoStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 2 ) 
				]
			}

			if ( action.event.target.checked === true && action.event.target.value === 'threeStops' ) {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 3 ) 
				]
			}

			if ( action.event.target.checked === false && action.event.target.value === 'threeStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 3 ) 
				]
			}

			return { 
				...state,
				[action.event.target.value]: action.event.target.checked,
				showAviatickets: filterShowAviatickets
			}
		default: return state;
	}
}
