import axios from "axios";
import { RoutesComponent } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

import actions from "./redux/actions";


function App() {
  const dispatch = useDispatch()
  const checkToken = () => {

    const token = document.cookie.replace('token=', '')
    if (!token) return
    axios.defaults.headers.authorization = `Bearer ${token}`

    if (axios.defaults.headers.authorization) dispatch(actions.auth(token))
  }

  axios.defaults.baseURL = "http://127.0.0.1:8000/"
  useEffect(() => {
    checkToken()
  }, [])
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <RoutesComponent />
      </div>
    </BrowserRouter>
  );

}

export default App;
