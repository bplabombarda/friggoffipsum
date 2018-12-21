import React from 'react';

import '../styles/Output.scss'

const Output = ({ paragraphs }) => {
	return (
		<section className="output-container">
			<div id="output-text" className={ paragraphs.length ? '' : 'hidden' }>
				{
					paragraphs.map((paragraph, index) => (
						<p key={index}>{ paragraph }</p>
					))
				}
			</div>
		</section>
	);
};

export default Output;