import React, 
	{ useState }  from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Users      from './userNames';

const Main = () => {
	const [ loader, setLoader]	= useState (true);

	setTimeout ( () => {setLoader (false)}, 500);

	if (loader)
		return <ClipLoader className = "loader" loading = {true} size = {150}/>

	return <Users />;
};

export default Main;
