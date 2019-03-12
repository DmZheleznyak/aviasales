import AllTickets from '../../tickets_example/tickets.json';

const initialState = {
	aviatickets: AllTickets.tickets, 
	activeCurrency: 'RUB',
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
			return {
				...state,
				activeCurrency: action.value
			}
		case 'SELECT_STOP':
			let filterShowAviatickets = [ ...state.showAviatickets ]

			if ( action.checked && action.value === 'withoutStops') {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 0 ) 
				]
			}

			if ( !action.checked && action.value === 'withoutStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 0 ) 
				]
			}
			
			if ( action.checked && action.value === 'oneStops' ) {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 1 ) 
				]
			}

			if ( !action.checked && action.value === 'oneStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 1 ) 
				]
			}
						
			if ( action.checked && action.value === 'twoStops' ) {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 2 ) 
				]
			}

			if ( !action.checked && action.value === 'twoStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 2 ) 
				]
			}

			if ( action.checked && action.value === 'threeStops' ) {
				filterShowAviatickets = [
					...filterShowAviatickets, 
					...state.aviatickets.filter( ticket => ticket.stops === 3 ) 
				]
			}

			if ( !action.checked && action.value === 'threeStops') {
				filterShowAviatickets = [
					...filterShowAviatickets.filter( ticket => ticket.stops !== 3 ) 
				]
			}

			return { 
				...state,
				[action.value]: action.checked,
				showAviatickets: filterShowAviatickets
			}

		case 'SELECT_ALL_STOPS':
			if (action.checked) {
				return {
					...state,
					allStops: true,
					withoutStops: true,
					oneStops: true,
					twoStops: true,
					threeStops: true,
					showAviatickets: [ ...state.aviatickets ]
				}
			} else {
				return {
					...state,
					allStops: false,
					withoutStops: false,
					oneStops: false,
					twoStops: false,
					threeStops: false,
					showAviatickets: []
				}
			}
		default: return state;
	}
}
