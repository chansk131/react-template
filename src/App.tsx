import React, { Suspense } from 'react'
import './App.css'
import PageWrapper from './components/layout/PageWrapper'
import LoginPage from './pages/LoginPage'

function App(): JSX.Element {
  return (
    <PageWrapper>
      <Suspense fallback="loading">
        <LoginPage />
      </Suspense>
    </PageWrapper>
  )
}

export default App
