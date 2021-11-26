import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {

  constructor() {
    super()
    this.state = {
      path: '/'
    }
  }

  route(next) {
    this.setState({
      path: next
    })
  }

  render() {
    const navItem = [
      {path: "/about", name: "ABOUT"},
      {path: "/portfolio", name: "PORTFOLIO"},
      {path: "/contact", name: "CONTACT"}
    ]
    const navList = navItem.map(item =>
      <Link
        to={item.path}
        key={item.name}
        className={this.state.path === item.path ? 'active' : ''}
        onClick={() => this.route(item.path)}>
          {item.name}
      </Link>
    )   
    return (
    <nav>{navList}</nav>
    )
  }
}
