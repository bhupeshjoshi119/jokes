import ErrorBoundary from './components/ErrorBoundary.jsx'

import { useState } from 'react'
import ReactJokes from './components/ReactJokes.jsx'
import GetRandomJoke  from './components/GetRandomJoke.jsx'
import GetBook from './components/GetBooks.jsx'
import RandomStock from './components/RandomStock.jsx'



function App() {

  return (
    <>
   <ErrorBoundary>
      <ReactJokes />
      <GetRandomJoke />
      <GetBook/>
      <RandomStock/>
    </ErrorBoundary>
    </>
  )
}

export default App
