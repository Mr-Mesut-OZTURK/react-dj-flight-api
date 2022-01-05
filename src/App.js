import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './router/AppRouter'


import axios from 'axios';
import { FlightAction } from './redux/actions/FlightActions'
import { useDispatch } from 'react-redux'




function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetchData()
    // console.log("object")
  })


  const fetchData = () => {
    axios.get('https://react-dj-flight-api.herokuapp.com/api/flights/')
      .then(({ data }) => {
        // console.log("axios", data)
        dispatch(FlightAction(data))
      })
      .catch(error => console.error(error))
  }

  return <AppRouter /> ;

}

export default App;
