import React		  from 'react';
import Grid           from '@material-ui/core/Grid';
import Paper          from '@material-ui/core/Paper';
import moment         from 'moment';
import Test           from '../tempData/Test'
import { ViewState }  from '@devexpress/dx-react-scheduler'; 
import {
	Scheduler,
	MonthView,
	Appointments,
	DateNavigator,
	Toolbar,
}                     from '@devexpress/dx-react-scheduler-material-ui';
import CloseIcon      from '@material-ui/icons/Close';
import 'react-calendar-timeline/lib/Timeline.css'

const Main = (props) => {
	const {index} = props;
	const current = moment("Mar 1 2020  1:33 PM").format();

	let schedulerData = Test.members[index].activity_periods.map (data => {
		return  {
			title: 'item 1',
			startDate: moment(data.start_time).format(),
			endDate: moment (data.end_time).format ()
		};
	});

	return (
		<Grid xs = {6} className = {'calander'}>
			<Paper justify = "center">
				<Scheduler data={schedulerData}>
					<ViewState defaultCurrentDate = {current} />
					<MonthView />
					<Toolbar />
					<Appointments />
					<DateNavigator/>
				</Scheduler>
			</Paper>
		</Grid>
	);
};

export default Main;
