import React, { Component } from 'react';
import propTypes from 'prop-types'

export const AppContextTypes = {
  translate: propTypes.func
}

export class AppWrapper extends Component {
  state = {
  }

  constructor(props) {
    super(props)
  }

  static childContextTypes = AppContextTypes;

  getChildContext() {
    return {
      translate: this.props.translate
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export const withApp = (WrappedComponent) => {
  const Wrapper = (props, { translate }) => (
    <WrappedComponent
      translate={translate}
      { ...props }
    />
  );

  Wrapper.contextTypes = AppContextTypes;

  return Wrapper;
}
