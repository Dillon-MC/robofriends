import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearch] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
      console.log(count);
  },[]/*No dependencies added, so useEffect only runs once. */);

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield);
  });
  
  const onSearchChanged = (event) => {
    setSearch(event.target.value);
  }

  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChanged}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
  );
}

export default App;