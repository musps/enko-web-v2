import React, { Component } from 'react'
import './styles.scss'

const DEFAULT_INPUT_CLASS = 'form-control'

/**
  * FORM COMPONENTS.
  *
  */

export const Label = props => {
  const {htmlFor,  labelValue} = props

  return (
    <label htmlFor={htmlFor}>
      {labelValue}
    </label>
  )
}

export const Input = props => {
  const {id, type, value, onChange, checked} = props
  let {className} = props

  className = typeof className !== 'undefined' ? className : DEFAULT_INPUT_CLASS

  return (
    <input
      checked={checked}
      onChange={onChange}
      className={className}
      type={type}
      id={id}
      value={value}
    />
  )
}

export const Button = props => {
  const {value, onClick} = props

  return (
    <button 
      onClick={onClick}
      type="button" 
      className="btn btn-primary">
      {value}
    </button>
  )
}

/**
  * GROUP COMPONENTS.
  *
  */

export const GroupInput = props => {
  const {labelValue, id, type, placeHolder, className, value, onChange} = props

  return (
    <div className="input-box">
      <Label htmlFor={id} labelValue={labelValue} />
      <Input onChange={onChange} value={value} id={id} 
        type={type} placeHolder={placeHolder} className={className} />
    </div>
  )
}

export const GroupButton = props => {
  const {value, onClick} = props

  return (
    <div className="input-box">
      <Button value={value} onClick={onClick} />
    </div>
  )
}

export const GroupCheckBox = props => {
  const {id, value, labelValue, checked, onChange} = props

  return (
    <div className="checkbox-row">
      <Input id={id} type="checkbox" value={value} checked={checked} onChange={onChange} />
      <Label htmlFor={id} labelValue={labelValue} />
    </div>
  )
}

export const _GroupButtonPassword = props => {
  const {labelValue, type, onClick, status, value, onChange} = props

  return (
    <div className="input-box">
      <Label htmlFor="password" labelValue={labelValue} />

      <div className="input-group">
        <input id="password" onChange={onChange} type={type}
          ame="password" className="form-control" value={value} />
        <div className="input-group-append btnShowPassword" onClick={onClick}>
          <span className="input-group-text">{status}</span>
        </div>
      </div>
    </div>
  )
}

export const GroupButtonPassword = class GroupButtonPassword extends Component {
  state = {
    'STATUS': false,
    'TEXT_HIDE': 'Cacher',
    'TEXT_SHOW': 'Afficher',
  }

  onClick = () => {
    console.log(this);
    this.setState({
      'STATUS': this.state.STATUS === true ? false : true
    })
  }

  render () {
    return (
      <_GroupButtonPassword 
        onClick={this.onClick}
        onChange={this.props.onChange}
        labelValue="password"
        value={this.props.value}
        type={this.state.STATUS === true ? 'text' : 'password'}
        status={this.state.STATUS === true ? this.state.TEXT_HIDE : this.state.TEXT_SHOW}
      />
    )
  }
}
