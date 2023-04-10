import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products"
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Products" exact Component={Products}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
