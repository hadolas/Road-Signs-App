import React from 'react';
import CardList from './CardList';
import {signs} from './signs';

const App = () => {
	return (
		<div>
			<h1>Road Signs</h1>
			<CardList signs={signs}/>
		</div>
	);
}

export default App;