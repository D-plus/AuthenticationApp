import React from 'react'
import { App } from './containers/App'
import { Route } from 'react-router'
import { Resources } from './components/Resources'
import NotFound from './components/NotFound'
import checkAuth from './components/HighOrderComponents/auth'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <Route path='/resources' component={checkAuth(Resources)} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
