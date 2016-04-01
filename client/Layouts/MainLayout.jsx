import React from 'react';

export const MainLayout = ({header, content}) => (
	<div className="layout" id="layout-default">
		<div id="header">
			{header}
		</div>
		<div id="content">
			{content}
		</div>
	</div>
)