import React, {Component} from 'react'

class Card extends Component {
	render() {
		return(
			<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<h1>Card heading</h1>
				<p>Card description here</p>
			</div>
		);
	}
}

export default Card;