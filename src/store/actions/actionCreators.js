import * as actionTypes from './actionTypes';

export const selectStop = event => ({
	type: actionTypes.SELECT_STOPS,
	value: event.target.value, 
	checked: event.target.checked
})

export const selectAllStops = event => ({
	type: actionTypes.SELECT_ALL_STOPS,
	value: event.target.value,
	checked: event.target.checked
})

export const selectCurrency = value => ({
	type: actionTypes.SELECT_CURRENCY,
	value
})