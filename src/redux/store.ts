import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'


import rootReducer from './root-reducer'

const middlewares =  [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export type State = ReturnType<typeof rootReducer>

export default store;