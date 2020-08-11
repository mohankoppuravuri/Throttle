import React                from 'react';
import ReactDOM             from 'react-dom';
import { StylesProvider }   from '@material-ui/core/styles';
import Main                 from './components/main';

import './styles.css'

ReactDOM.render(
	<StylesProvider injectFirst>
		<Main />
	</StylesProvider>,
	document.getElementById('root')
);
