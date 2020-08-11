import React	  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid       from '@material-ui/core/Grid';

const cssPrefix = "main-";

const Main = (props) => {
	const {text, i , xs} = props;
	return (
			<Grid className = { cssPrefix + 'cell'} xs = {xs} item>
				<Typography variant = "h5">
					{text}
				</Typography>
			</Grid>
	);
};

export default Main;
