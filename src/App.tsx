import React, { useEffect } from 'react'

import './app.scss'

import PageTitle from './components/PageTitle/PageTitle'
import Cites from './components/Cites/Cites'
import { useDispatch } from 'react-redux'
import { loadCites } from './helpers/loadCites'
import { setCites } from './actions/CitesActions'
import { setTodayCites } from './actions/TodayCiteActions'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    loadCites().then(cites => {
      dispatch(setCites(cites))
      dispatch(setTodayCites(cites))
    })
  }, [])
  return (
    <div className="App">
      <PageTitle />
      <Cites />
    </div>
  )
}

export default App
