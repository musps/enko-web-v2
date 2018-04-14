import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import 'bootstrap/dist/css/bootstrap.min.css'

import store from '@/store'
import translate from '@/providers/TranslateProvider'
import { AppWrapper } from '@/wrappers/AppWrapper'
import Main from '@/components/Main/Component'

const history = createBrowserHistory()

const App = () => {
  return (
    <AppWrapper translate={translate}>
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
    </AppWrapper>
  )
}

export default App
