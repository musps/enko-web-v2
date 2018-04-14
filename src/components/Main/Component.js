import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import NavBar from '@/components/Global/NavBar/Container'
import './styles.scss'
import Login from '@/components/Account/Login/Container'

const Content = ({children}) => {
  return (
    <div className="content">
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>Link xx</li>
        <li>Link xx</li>
        <li>Link xx</li>
        <li>Link xx</li>
      </ul>
      <ul>
        <li>Link xx</li>
        <li>Link xx</li>
        <li>Link xx</li>
        <li>Link xx</li>
      </ul>
      <ul>
        <li>Link xx</li>
        <li>Link xx</li>
        <li>Link xx</li>
        <li>Link xx</li>
      </ul>
    </div>
  )
}

const Main = props => {
  return (
    <div className="enko">
      <NavBar />

      <Content>
        <Switch>
          <Route exact path="/" component={Content}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Content>

      <Footer />
    </div>
  )
}

export default Main
