import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {signs} from '../signs';


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
		const {signs, searchfield} = this.state;
		const filteredSigns = signs.filter(sign => {
			return sign.img.toLowerCase().includes(searchfield.toLowerCase());
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