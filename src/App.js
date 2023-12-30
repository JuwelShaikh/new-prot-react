import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/intro/Intro";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
