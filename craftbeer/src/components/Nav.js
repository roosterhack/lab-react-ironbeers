import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <nav style={{ width: '100%', height: "60px", backgroundColor: "blue", color: "white" }}>
            <h2>Home</h2></nav></Link>
      </div>
    )
  }
}

export default Nav