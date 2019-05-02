import React, { Component } from 'react'
import Nav from './Nav';
import axios from 'axios'

export class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: '',
    contributedBy: ''
  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy } = this.state
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy
    };

    axios.post('https://ironbeerapi.herokuapp.com/beers/new', ({ newBeer })).then(response => {
      this.setState({
        name: '',
        tagline: '',
        description: '',
        firstBrewed: '',
        brewersTips: '',
        attenuationLevel: '',
        contributedBy: ''
      })
    })

  }


  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name='name'
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            value={this.state.tagline}
            onChange={this.handleChange}
            name='tagline'
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            name='description'
          />
          <label htmlFor="firstBrewed">FirstBrewed</label>
          <input
            type="text"
            value={this.state.firstBrewed}
            onChange={this.handleChange}
            name='firstBrewed'
          />
          <label htmlFor="brewersTips">Brewers Tips</label>
          <input
            type="text"
            value={this.state.brewersTips}
            onChange={this.handleChange}
            name='brewersTips'
          />
          <label htmlFor="attenuationLevel">Attenuation Level</label>
          <input
            type="text"
            value={this.state.attenuationLevel}
            onChange={this.handleChange}
            name='attenuationLevel'
          />
          <label htmlFor="contributedBy">Contributed by</label>
          <input
            type="text"
            value={this.state.contributedBy}
            onChange={this.handleChange}
            name='contributedBy'
          />
          <button type="submit">Add New</button>
        </form>
      </div>
    )
  }
}

export default NewBeer
