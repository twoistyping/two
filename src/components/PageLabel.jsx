import React from 'react';

const PageLabel = ({ label }) => (
	<div className="page-label">
		<h1>{label}</h1>
	</div>
);

PageLabel.defaultProps = {
	label: "unknown"
}

export default PageLabel;
