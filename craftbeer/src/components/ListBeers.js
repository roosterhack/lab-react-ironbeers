import React, { Component } from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom'
import axios from 'axios'

export class ListBeers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ironbeerapi.herokuapp.com/beers/all').then(response => {
      this.setState({
        beers: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <ul>
          {

            this.state.beers.map(beer => {
              return (
                <li key={beer._id} className='beer-list'>
                  <img src={beer.image_url} alt={beer.name} />
                  <div className="info">
                    <h2>{beer.name}</h2>
                    <h4>{beer.tagline}</h4>
                    <span>Created by: {beer.contributed_by}</span>
                  </div>
                </li>
              )
            })
          }

        </ul>
      </div>
    )
  }
}

export default ListBeers
