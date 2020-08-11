import React, {
	useState,
}				  from 'react';
import Grid       from '@material-ui/core/Grid';
import Paper      from '@material-ui/core/Paper';
import moment     from 'moment';
import Test       from '../tempData/Test'
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	MonthView,
	Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import 'react-calendar-timeline/lib/Timeline.css'
import Cell       from './cell';

const cssPrefix = "main-";

const Main = (props) => {
	const {index} = props;
	let schedulerData = Test.members[index].activity_periods.map (data => {
		console.log(data.start_time)
		return  {
			title: 'item 1',
			startDate: moment(data.start_time).format(),
			endDate: moment (data.end_time).format ()
		};
	});

	
	console.log(schedulerData)
	return (
		<Grid container justify = "center">
				<Grid xs = {6} >
					<Paper justify = "center">
						<Scheduler
							data={schedulerData}
						>
							<ViewState
								currentDate={new Date("Mar 1 2020  1:33 PM")}
							/>
							<MonthView
							/>
							<Appointments />
						</Scheduler>
					</Paper>
				</Grid>
			</Grid>
	);
};

export default Main;
