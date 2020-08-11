import React, {
	useState,
}				  from 'react';
import Grid       from '@material-ui/core/Grid';
import Paper      from '@material-ui/core/Paper';
import Test       from '../tempData/Test'

import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
import Cell       from './cell';
import TimeLine   from './timeLine';
const cssPrefix = "main-";

const getHeader = () => {
	const list = ['Start Date', 'End Date'].map ((data, i) => {
		return < Cell text = {data}  i = {i} xs = {6} />	
	});

	return (
		<Grid xs = {12} className = {cssPrefix + "header"} direction = "row" container>
			{list}
		</Grid>
	);
};

const Main = (props) => {
	const {index} = props;
	const [open, setOpen] = useState (false);

	const showTimeStamps = () => {
		const rows  = Test.members[index].activity_periods.map ( value => {
			return (

				<Grid xs = {12} id = {index} className = {cssPrefix + 'row'} direction = "row" container>
					<Cell text = { value.start_time} xs = {6} />
					<Cell text = { value.end_time} xs = {6}  />
				</Grid>
			);
		});
		return rows	
	};
	if (open)
		return <TimeLine index = {index} />

	return (
		<Grid className = {cssPrefix + 'modal'} container justify = "center">
			<Grid xs = {11} item>
				<Grid xs = {6} >
					<Paper justify = "center">
						<Grid container direction = 'row' justify = "space-between">
							<Cell text = {Test.members[index].real_name}/>
							<EventTwoToneIcon color = "primary" fontSize= "large" onClick = { () => { setOpen (!open)}} />
						</Grid>
							{getHeader()}
						{showTimeStamps(0)}
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Main;
