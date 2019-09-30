// import React, {Component} from 'react'
import React from 'react'

const Card = (props) => {
	const {id, def, img} = props;
// class Card extends Component {
	// render() {
		return(
			<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<h1>{id}</h1>
				<img alt="text" src={`imgs/${img}`}/>
				<p>{def}</p>
			</div>
		);
	
}

export default Card;