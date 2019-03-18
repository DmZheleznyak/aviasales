import React from 'react';
import './supportTickets.css';

import { connect } from 'react-redux';
import { selectStop, selectAllStops , selectCurrency } from '../../store/actions/actionCreators';

import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const supportTickets = props => {

	const currencies = [ 'RUB', 'EUR', 'USD' ]

	const buttonsCurrency = currencies.map( currency => 
		<ToggleButton key={ currency }
			selected = { props.activeCurrency === currency }
			value = { currency }
		>
			{ currency }
		</ToggleButton>
	 )
	
	return (
		<div>
			<Typography variant="h4">Support</Typography>
			<Paper className="support" square>
				<Typography>ВАЛЮТА</Typography>
				<ToggleButtonGroup
				exclusive
				onChange = { (event, value) => props.selectCurrency( value ) }
				>
					{ buttonsCurrency }
				</ToggleButtonGroup>
				<Typography>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
				<div className="CheckboxGroup">
					<div className="CheckboxItem">
						<FormControlLabel
							control={
								<Checkbox 
									checked={ props.allStops } 
									value="all" 
									onChange={ event => props.selectAllStops( event ) }/>
							}
							label="All" />
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox 
									checked={ props.withoutStops } 
									value="withoutStops" 
									onChange={ event => props.selectStop( event ) } />
							}
							label="Без пересадок" />
						<Button className='btnOnly' onClick = { event => console.log(event) }>только</Button>
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox 
									checked={ props.oneStops } 
									value="oneStops" 
									onChange={ event => props.selectStop( event ) } />
							}
							label="1 пересадка" />
						<Button className='btnOnly'>только</Button>
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox 
									checked={ props.twoStops } 
									value="twoStops" 
									onChange={ event => props.selectStop( event ) } />
							}
							label="2 пересадки" />
						<Button className='btnOnly'>только</Button>
					</div>
					<div className="CheckboxItem">
					<FormControlLabel
							control={
								<Checkbox 
									checked={ props.threeStops } 
									value="threeStops" 
									onChange={ event => props.selectStop( event ) } />
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

	activeCurrency: state.activeCurrency
})

const mapDispatchToProps = dispatch => ({
	selectStop: event => dispatch( selectStop( event ) ),
	selectAllStops: event => dispatch( selectAllStops( event ) ),
	selectCurrency: value => dispatch( selectCurrency( value ) )
})

const SupportTickets = connect(mapStateToProps, mapDispatchToProps)(supportTickets)

export default SupportTickets
