import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(rootReducer, persistedState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(()=>{ 
    localStorage.setItem('reduxState', JSON.stringify(store.getState())) 
})