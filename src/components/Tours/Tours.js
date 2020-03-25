import React from 'react';
import SingleTour from './SingleTour';
import Styles from '../../css/items.module.css';
const Tours = ({ tours }) => {
	console.log(tours);
	return (
		<section className={Styles.tours}>
			<h2>our tours</h2>
			<div className={Styles.center}>
				{tours.map(({ node }) => {
					return <SingleTour key={node.id} tour={node} />;
				})}
			</div>
		</section>
	);
};

export default Tours;
