import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <Link to="/" className="navbar-brand font-weight-bold">React Phone Store</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" activeClassName="font-weight-bold" to="/">Home</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" activeClassName="font-weight-bold" to="/catalog">Catalog</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" activeClassName="font-weight-bold" to="/about">About</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" activeClassName="font-weight-bold" to="/where">Where</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  )

export default NavBar