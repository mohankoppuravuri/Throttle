import React      from 'react';
import Modal      from '@material-ui/core/Modal';
import User       from './timeStamps';

const Component = (props) => {
	const { open, setOpen, row } = props;
	return (
		<Modal open = {open} onClose = { () => setOpen (false)}>
			<User index = {row}/>
		</Modal>
	);
};

export default Component;
