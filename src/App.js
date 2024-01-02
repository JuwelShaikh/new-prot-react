import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Protfolio from "./Components/Protfolio/Protfolio";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Protfolio/>
    </div>
  );
}

export default App;
