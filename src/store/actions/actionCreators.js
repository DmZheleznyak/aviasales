import * as actionTypes from './actionTypes';

export const selectStop = event => ({
	type: actionTypes.SELECT_STOPS,
	event
})

export const selectCurrency = event => ({
	type: actionTypes.SELECT_CURRENCY,
	event
})