import React, { useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import './app.scss'

import { useDispatch } from 'react-redux'
import { loadCites } from './helpers/loadCites'
import { setCites } from './actions/CitesActions'
import { setTodayCites } from './actions/TodayCiteActions'
import CitesAdmin from './Views/CitesAdmin'
import CitesEdit from './Views/CitesEdit'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    const setAllCites = async () => {
      const cites = await loadCites()
      dispatch(setCites(cites))
      dispatch(setTodayCites(cites))
    }
    setAllCites()
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={CitesAdmin}/>
          <Route path={'/edit/:id'} exact component={CitesEdit}/>
          <Redirect to={'/'} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
