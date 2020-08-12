import React	  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid       from '@material-ui/core/Grid';

// This module is used for all the texts to dispaly for uniformity.
const Main = (props) => {
	const {text, xs} = props;
	return (
			<Grid className = 'cell' xs = {xs} item>
				<Typography variant = "h5">
					{text}
				</Typography>
			</Grid>
	);
};

export default Main;
