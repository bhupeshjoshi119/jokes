import ErrorBoundary from './components/ErrorBoundary.jsx'

import { useState } from 'react'
import ReactJokes from './components/ReactJokes.jsx'
import GetRandomJoke  from './components/GetRandomJoke.jsx'



function App() {

  return (
    <>
   <ErrorBoundary>
      <ReactJokes />
      <GetRandomJoke />
    </ErrorBoundary>
    </>
  )
}

export default App
