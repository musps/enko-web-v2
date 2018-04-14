import React, { Component } from 'react'
import './styles.scss'

const DEFAULT_INPUT_CLASS = 'form-control'
const ERROR_CLASS = 'is-invalid'

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
  const {isError, errorMsg, labelValue, id, type, placeHolder, className, value, onChange} = props
  const _isError = isError === true ? ERROR_CLASS : ''

  return (
    <div className={`input-box ${_isError}`}>
      <Label htmlFor={id} labelValue={labelValue} />
      <Input onChange={onChange} value={value} id={id} 
        type={type} placeHolder={placeHolder} className={className} />
      <div className="invalid-feedback">{errorMsg}</div>
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
  const {isError, errorMsg, id, value, labelValue, checked, onChange} = props
  const _isError = isError === true ? ERROR_CLASS : ''

  return (
    <div className={`input-box ${_isError}`}>
      <div className="checkbox-row">
        <Input id={id} type="checkbox" value={value} checked={checked} onChange={onChange} />
        <Label htmlFor={id} labelValue={labelValue} />
      </div>
      <div className="invalid-feedback">{errorMsg}</div>
    </div>
  )
}

export const _GroupButtonPassword = props => {
  const {isError, errorMsg, labelValue, type, onClick, status, value, onChange} = props
  const _isError = isError === true ? ERROR_CLASS : ''

  return (
    <div className={`input-box ${_isError}`}>
      <Label htmlFor="password" labelValue={labelValue} />

      <div className="input-group">
        <input id="password" onChange={onChange} type={type}
          ame="password" className="form-control" value={value} />
        <div className="input-group-append btnShowPassword" onClick={onClick}>
          <span className="input-group-text">{status}</span>
        </div>
      </div>

      <div className="invalid-feedback">{errorMsg}</div>
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
    this.setState({
      'STATUS': this.state.STATUS === true ? false : true
    })
  }

  render () {
    return (
      <_GroupButtonPassword 
        isError={this.props.isError}
        errorMsg={this.props.errorMsg}
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
