import React, { Component } from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom'
import axios from 'axios'

export class RandomBeer extends Component {
  state = {
    beer: []
  }

  componentDidMount() {
    axios.get('https://ironbeerapi.herokuapp.com/beers/random').then(response => {
      this.setState({
        beer: response.data
      })
    })
  }

  render() {
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by, _id } = this.state.beer
    return (
      <div>
        <Nav />
        <section className="beer" key={_id}>
          <figure>
            <img src={image_url} alt="" />
          </figure>
          <h1>{name}</h1>
          <h3>{tagline}</h3>
          <div className="brew-info">
            <span>{attenuation_level}</span>
            <span>{first_brewed}</span>
          </div>
          <p>{description}</p>
          <cite>{contributed_by}</cite>
        </section>
      </div>
    )
  }
}

export default RandomBeer
