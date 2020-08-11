import React, 
	{ useState }  from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Users      from './userNames';
import Grid       from '@material-ui/core/Grid';

const Main = () => {
	const [ loader, setLoader]	= useState (true);

	setTimeout ( () => {setLoader (false)}, 500);

	if (loader)
		return <ClipLoader className = "loader" loading = {true} size = {150}/>

	return (
		<Grid container className = "root">
			<Users />
		</Grid>
	);
};

export default Main;
