import React from 'react';
import './supportTickets.css';

import { connect } from 'react-redux';
import { selectStop, selectCurrency } from '../../store/actions/actionCreators';

import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const supportTickets = (props) => {
	console.log( 'props in Support Tickets: ' , props)
	
	return (
		<div>
			<Typography variant="h4">Support</Typography>
			<Paper className="support" square>
				<Typography>ВАЛЮТА</Typography>
				<ToggleButtonGroup
				exclusive 
				onChange={ event => props.selectCurrency(event) } 
				>
					<ToggleButton
						selected = { props.currencyRub }
						value='RUB'>RUB</ToggleButton>
					<ToggleButton 
						selected = { props.currencyEur }
						value='EUR'>EUR</ToggleButton>
					<ToggleButton
						selected = { props.currencyUsd }
						value='USD'>USD</ToggleButton>
				</ToggleButtonGroup>
				<Typography>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
				<div className="CheckboxGroup">
					<div className="CheckboxItem">
						<FormControlLabel
							control={
								<Checkbox checked={props.allStops} value="all" onChange={(event) => props.selectStop( event ) }/>
							}
							label="All" />
						<Button onClick={ event => console.log(event.target) } className='btnOnly'>
							<Typography>только</Typography>
						</Button>
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox checked={props.withoutStops} value="withoutStops" onChange={(event) => props.selectStop( event ) } />
							}
							label="Без пересадок" />
						<Button className='btnOnly'>только</Button>
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox checked={props.oneStops} value="oneStops" onChange={(event) => props.selectStop( event ) } />
							}
							label="1 пересадка" />
						<Button className='btnOnly'>только</Button>
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox checked={props.twoStops} value="twoStops" onChange={(event) => props.selectStop( event ) } />
							}
							label="2 пересадки" />
						<Button className='btnOnly'>только</Button>
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox checked={props.threeStops} value="threeStops" onChange={(event) => props.selectStop( event ) } />
							}
							label="3 пересадки" />
						<Button className='btnOnly'>только</Button>
					</div>
				</div>
			</Paper>
		</div>
	)
}


const mapStateToProps = state => ({
	allStops: state.allStops,
	withoutStops: state.withoutStops,
	oneStops: state.oneStops,
	twoStops: state.twoStops,
	threeStops: state.threeStops,

	currencyRub: state.currencyRub,
	currencyEur: state.currencyEur,
	currencyUsd: state.currencyUsd
})

const mapDispatchToProps = dispatch => ({
	selectStop: event => dispatch( selectStop( event ) ),
	selectCurrency: event => dispatch( selectCurrency( event ) )
})

const SupportTickets = connect(mapStateToProps, mapDispatchToProps)(supportTickets)

export default SupportTickets
