import React from 'react';
import { connect } from 'react-redux';
import './ticketsInfo.css';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ticketsList = props => {

	const TicketsListInfo = props.showAviatickets.map(ticket => {

		const showCurrency = () => {
			if (props.activeCurrency === 'RUB') {
				return `${ticket.price} RUB`
			}

			if (props.activeCurrency === 'USD') {
				return `${Math.round( (ticket.price / 66.5) * 10 ) / 10} USD`
			}

			if (props.activeCurrency === 'EUR') {
				return `${Math.round( (ticket.price / 75) * 10 ) / 10} EUR`
			}
		}

		const showStops = () => {
			if (ticket.stops === 0) {
				return (
					<Typography component='p'> Без пересадок </Typography>
				)
			}

			if (ticket.stops === 1) {
				return (
					<Typography component='p'> 1 пересадка </Typography>
				)
			}

			if (ticket.stops > 1 || ticket.stops < 5) {
				return (
					<Typography component='p'> {ticket.stops} пересадки </Typography>
				)
			}
		}

		return (
			<Paper className="info">
				<Grid container>
					<Grid item xs={4} >
						<Typography variant='h6'>
							<span className="nameAirline">Turkish <br /> Airline.</span>
							<span>Logo</span>
						</Typography>
						<Button className="btnBuyTickets" variant='contained' color="secondary">
							Купить <br /> { showCurrency() }
						</Button>
					</Grid>
					<Grid item xs={8}>
						<div className="schedule">
							<div className="schedule-info">
								<span className="time">{ ticket.departure_time }</span>
								<span className="location">{ ticket.origin }, { ticket.origin_name }</span>
								<span className="date">{ ticket.departure_date }</span>
							</div>
							<div>
								{ showStops() }
							</div>
							<div className="schedule-info">
								<span className="time">{ ticket.arrival_time }</span>
								<span className="location">{ ticket.destination }, {ticket.destination_name}</span>
								<span className="date">{ ticket.arrival_time }</span>
							</div>
						</div>
					</Grid>
				</Grid>
			</Paper>
		) 
	})
	
	return (
		<div>
			<Typography variant='h4'>Tickets List</Typography>
			{ TicketsListInfo }
		</div>
	)
}

const mapStateToProps = state => ({
	showAviatickets: state.showAviatickets,
	allAviatickets: state.aviatickets,
	activeCurrency: state.activeCurrency
})

const TicketsList = connect( mapStateToProps )( ticketsList )

export default TicketsList;