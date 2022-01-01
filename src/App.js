import axios from "axios";
import { RoutesComponent } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";


function App() {
  axios.defaults.baseURL = "http://127.0.0.1:8000/"
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesComponent />
      </div> 
    </BrowserRouter> 
  );
}

export default App;
