import "./App.css";
import PortfolioContainer from "./Portfolio_Container/PortfolioContainer";
import axios from "axios";
axios.defaults.baseURL = "https://portfolio-tolalemma-ka07.onrender.com";
function App() {
  return (
    <div className="App">
     <PortfolioContainer />
    </div>
  );
}

export default App;
