// import React, {Component} from 'react'
import React from 'react'

const Card = (props) => {
	const {img, type} = props;
// class Card extends Component {
	// render() {
		return(
			<div className="tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5">
				<img alt="text" src={`imgs/${type}/${img}.svg`}/>
				<p>{img}</p>
			</div>
		);
	
}

export default Card;