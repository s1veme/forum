import axios from "axios";
import { RoutesComponent } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import React, { useEffect, useState } from "react";

const checkToken = () => {
  const token = document.cookie
  if (!token.token) return
  axios.defaults.headers.token = `Bearer ${token.token}`
  return token
}
export const AuthContext = React.createContext()
function App() {

  const [token, setToken] = useState()
  axios.defaults.baseURL = "http://127.0.0.1:8000/"
  const setUserToken = (token) => {
    setToken(token)
    document.cookie = `token=${token}`
    axios.defaults.headers.token = `Bearer ${token.token}`

  }
  useEffect(() => {

    setToken(checkToken())
  }, [])




  return (
    <AuthContext.Provider value={{
      token, setUserToken
    }}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <RoutesComponent />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );

}

export default App;
