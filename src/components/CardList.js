import React from 'react';
import Card from './Card';

const CardList = (props) => {
	const {signs} = props;
	// const cardsArray = signs.map((sign, i) => {
	// 	return (<Card 
	// 		key={signs[i].id} 
	// 		id={signs[i].id} 
	// 		def={signs[i].definition}
	// 		/>
	// 	);
	// });
	return(
		<div>
			{
				signs.map((sign, i) => {
					return (
						<Card 
						key={signs[i].id} 
						id={signs[i].id} 
						img={signs[i].img}
						type={signs[i].type}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;