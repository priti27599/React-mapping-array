import React from 'react';
import './style.css';
import Maparr from './Maparr.js';
import Mapobj from './Mapobj.js';


export default function App() {
  const numbers = [0, 1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Numbers List</h1>
      <ul>
       <Numbers numbers={numbers} />
      </ul>
      <Maparr />
      <Mapobj />

      
    </div>
  );
}

const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li>{number}</li>);
  return list;
};
