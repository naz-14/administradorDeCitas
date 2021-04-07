import React from 'react'

import './app.scss'

import PageTitle from './components/PageTitle/PageTitle'
import Cites from './components/Cites/Cites'

function App () {
  return (
    <div className="App">
      <PageTitle />
      <Cites />
    </div>
  )
}

export default App
