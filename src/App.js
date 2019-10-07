import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import {signs} from './signs';


class App extends Component {
	constructor() {
		super();
		this.state = {
			signs: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		this.setState({signs: signs})
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}


	render() {
		const filteredSigns = this.state.signs.filter(sign => {
			return sign.img.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1>Road Signs</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList signs={filteredSigns}/>
				</Scroll>
			</div>
		);
	}
}

export default App;