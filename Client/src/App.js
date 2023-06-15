import "./App.css";
import PortfolioContainer from "./Portfolio_Container/PortfolioContainer";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
function App() {
  return (
    <div className="App">
     <PortfolioContainer />
    </div>
  );
}

export default App;
