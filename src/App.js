import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtility"
        />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text here to Analyze" />}>
            </Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
