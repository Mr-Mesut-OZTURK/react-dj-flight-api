import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './router/AppRouter'

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))


function App() {

  return (
    <Provider store={store}>

      <AppRouter />

    </Provider>
  );

}

export default App;
