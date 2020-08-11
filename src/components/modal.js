import React      from 'react';
import Grid       from '@material-ui/core/Grid';
import Modal      from '@material-ui/core/Modal';
import Paper      from '@material-ui/core/Paper';
import User       from './timeStamps';

const cssPrefix = "main-";

const Component = (props) => {
	const { open, setOpen, row } = props;
	return (
		<Modal open = {open} onClose = { () => setOpen (false)}>
			<User index = {row}/>
		</Modal>
	);
};

export default Component;
