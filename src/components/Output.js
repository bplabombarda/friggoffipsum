import React from 'react';
import { array } from 'prop-types'

import '../styles/Output.scss';

const Output = ({ paragraphs }) => {
	return (
		<section className='output-container'>
			<div className={ paragraphs.length ? 'output' : 'output hidden' } >
				{
					paragraphs.map((paragraph, index) => (
						<p key={ index }>{ paragraph }</p>
					))
				}
			</div>
		</section>
	);
};

Output.propTypes = {
  paragraphs: array,
};

export default Output;
