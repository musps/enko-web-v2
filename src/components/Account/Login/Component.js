import React, { Component } from 'react'
import { 
  GroupInput, 
  GroupButton, 
  GroupCheckBox,
  GroupButtonPassword
} from '@/components/Global/Form'

export const Login = class Login extends Component {

  state = {
    'email': '',
    'password': '',
    'rememberMe': false
  }

  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick (e) {
    console.log(this.state)
  }

  onChange (e)  {
    let newValue = e.target.value

    if (e.target.type === 'checkbox') {
      newValue = e.target.checked
    }
    this.setState({
      [e.target.id]: newValue
    })
  }

  render () {
    const {email, password, rememberMe} = this.state
    const {translate} = this.props

    return (
      <div className="login">
        <div className="form-container">
          <GroupInput
            isError={true}
            errorMsg={'default error msg'}
            id="email" 
            type="email" 
            value={email}
            onChange={this.onChange}
            labelValue={translate('login.form.email')} />
          <GroupButtonPassword
            isError={true}
            errorMsg={'default error msg'}
            id="password" 
            type="password" 
            value={password}
            onChange={this.onChange}
            labelValue={translate('login.form.password')} />
          <GroupCheckBox
            isError={true}
            errorMsg={'default error msg'}
            id="rememberMe"
            checked={rememberMe}
            value="ok"
            onChange={this.onChange}
            labelValue={translate('login.form.remember_me')} />
          <GroupButton 
            value={translate('login.form.submit')} 
            onClick={this.onClick}
          />
        </div>
      </div>
    )
  }
}
