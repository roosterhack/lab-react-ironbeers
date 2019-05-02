import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/ListBeers'>
            <img src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
            <h1>All Beers</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eos fuga repellendus debitis, aliquam ipsum consequuntur ab, reprehenderit illum assumenda quidem blanditiis maxime cum est minus recusandae sunt deleniti laborum.</p>
          </Link>
        </li>
        <li>
          <Link to='/RandomBeer'>
            <img src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
            <h1>Random Beer</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eos fuga repellendus debitis, aliquam ipsum consequuntur ab, reprehenderit illum assumenda quidem blanditiis maxime cum est minus recusandae sunt deleniti laborum.</p>
          </Link>
        </li>
        <li>
          <Link to='/NewBeer'>
            <img src="https://images.unsplash.com/photo-1522057306606-8d84daa75e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" alt="" />
            <h1>New Beer</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eos fuga repellendus debitis, aliquam ipsum consequuntur ab, reprehenderit illum assumenda quidem blanditiis maxime cum est minus recusandae sunt deleniti laborum.</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;