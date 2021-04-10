import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { CitesReducer } from '../reducers/CitesReducer'

const reducers = combineReducers({
  cites: CitesReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
