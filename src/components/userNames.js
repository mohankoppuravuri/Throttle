import React, {
	useState,
}				    from 'react';
import Grid         from '@material-ui/core/Grid';
import Paper        from '@material-ui/core/Paper';
import Test         from '../tempData/Test'

import Cell         from './cell';
import Modal        from './modal';
import TimelineIcon from '@material-ui/icons/Timeline';

const getHeader = () => {
	const list = ['Id' ,'Name'].map ((data, i) => {
		return < Cell text = {data}  i = {i} xs = {6} />	
	});

	return (
		<Grid xs = {12} className = "header" direction = "row" container>
			{list}
		</Grid>
	);
};

const Main = () => {
	const [open, setOpen]      = useState (false);
	const [currentRow, setRow] = useState (0); 

	const openModel = (index) => {
		setOpen (true);	
		setRow  (index);
	}

	const showData = (index) => {
		return (
			<Grid xs = {12} id = {index} className = 'row' direction = "row" container >
				<Cell text = { Test.members[index].id} xs = {5}  />
				<Cell text = { Test.members[index].real_name} xs = {6} />
				<Cell text = {<TimelineIcon className = "icon-timePeriod" onClick = { () => openModel (index)}/>} xs = {1} />
			</Grid>
		);	
	};
	return (
		<Paper className = "userList-root" justify = "center">
			{getHeader()}
			{showData(0)}
			{showData(1)}
			<Modal row = {currentRow} open = {open} setOpen = { () => {setOpen (false)}} />
		</Paper>
	);
};

export default Main;
