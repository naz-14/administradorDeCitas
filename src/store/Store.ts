import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { CitesReducer } from '../reducers/CitesReducer'
import { TodayCitesReducer } from '../reducers/TodayCitesReducer'

const reducers = combineReducers({
  cites: CitesReducer,
  todayCites: TodayCitesReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
