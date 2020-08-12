import React, 
	{ useState }  from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Users      from './userNames';
import Grid       from '@material-ui/core/Grid';
import bg         from '../throttle.png';
import Cell       from './cell';
import Typography from '@material-ui/core/Typography';

const Main = () => {
	const [ loader, setLoader]	= useState (true);

	setTimeout ( () => {setLoader (false)}, 500);

	if (loader)
		return <ClipLoader className = "loader" loading = {true} size = {150}/>

	return (
		<Grid container className = "root">
			<Grid xs = {11} item>
				<Grid justify = "center" className = "logo">
					<img src={bg} alt="none" />
				</Grid>
				<Users />
			</Grid>
		</Grid>
	);
};

export default Main;
