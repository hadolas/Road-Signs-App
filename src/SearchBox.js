import React from 'react'

const SearchBox = (props) => {
	const {searchChange} = props;
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba b--blue bg-lightest-blue'
				type='search' 
				placeholder='Seach signs'
				onChange = {searchChange}
			/>
		</div>
	)
}

export default SearchBox;