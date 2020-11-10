import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'

const LoginPage = lazy(() => import('./pages/LoginPage'))

function App(): JSX.Element {
  const user = null
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Route exact from="/">
            {!user && <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" render={() => <LoginPage />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
