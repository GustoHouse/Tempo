import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './Layouts/MainLayout.jsx';
import TimeBoard from './Components/App/TimeBoard/TimeBoard.jsx';


FlowRouter.route('/', {
	action() {
		mount (MainLayout, {
			content: (<TimeBoard />)
		})
	}
})