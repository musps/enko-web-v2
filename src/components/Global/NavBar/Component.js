import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './styles.scss'

const NavBar = props => {
  const { translate } = props

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">{translate('navBar.brand')}</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="" className="nav-item nav-link">{translate('navBar.link.home')}</Link>
          <Link to="" className="nav-item nav-link">{translate('navBar.link.about')}</Link>
          <Link to="" className="nav-item nav-link">{translate('navBar.link.contact')}</Link>
          <Link to="/register" className="nav-item nav-link">{translate('navBar.link.register')}</Link>
          <Link to="/login" className="nav-item nav-link">{translate('navBar.link.login')}</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar