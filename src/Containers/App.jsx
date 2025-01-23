import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';


function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {setRobots(users)});
	}, [])
	
	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}
	const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	return !robots.length ?
	<h1>Loading</h1> :
	(
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={onSearchChange}/>
		<Scroll>
		<CardList robots={filteredRobots}/>
		</Scroll>
		</div>
	);
}

export default App;