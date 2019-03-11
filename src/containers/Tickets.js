import React, { Component } from 'react';
import './Tickets.css';
import Grid from '@material-ui/core/Grid';

import SupportTickets from '../componets/SupportTickets/supportTickets';
import TicketsInfo from '../componets/Tickets/ticketsInfo';

class Tickets extends Component {



	render() {
		return (
			<div className="Tickets">
				<Grid container spacing={24}>
					<Grid item md={4} xs={12}>
						<SupportTickets />
					</Grid>
					<Grid item md={8} xs={12}>
						<TicketsInfo />
					</Grid>
				</Grid>	
			</div>
		)
	}
}

export default Tickets;