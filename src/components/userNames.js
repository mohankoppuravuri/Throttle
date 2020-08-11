import React, {
	useState,
}				  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid       from '@material-ui/core/Grid';
import Paper      from '@material-ui/core/Paper';
import Test       from '../tempData/Test'

import Cell       from './cell';
import Modal      from './modal';
const cssPrefix = "main-";
console.log(Test);

const getHeader = () => {
	const list = ['Id' ,'Name'].map ((data, i) => {
		return < Cell text = {data}  i = {i} xs = {6} />	
	});

	return (
		<Grid xs = {12} className = {cssPrefix + "header"} direction = "row" container>
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
			<Grid xs = {12} id = {index} className = {cssPrefix + 'row'} direction = "row" container onClick = { () => openModel (index)}>
				<Cell text = { Test.members[index].id} xs = {6}  />
				<Cell text = { Test.members[index].real_name} xs = {6} />
			</Grid>
		);	
	};
	return (
		<Grid container justify = "center">
			<Grid xs = {11} item>
				<Grid xs = {6} >
				<Paper justify = "center">
					{getHeader()}
					{showData(0)}
					{showData(1)}
				</Paper>
					</Grid>
			</Grid>

			<Modal row = {currentRow} open = {open} setOpen = { () => {setOpen (false)}} />
		</Grid>
	);
};

export default Main;
