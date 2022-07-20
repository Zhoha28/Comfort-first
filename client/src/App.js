import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homescreen from './screens/Homescreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>

       <BrowserRouter>
       <Routes>
       <Route path="/home" exact element={<Homescreen />} />
       </Routes>
       </BrowserRouter>

       <Footer></Footer>
    </div>
  );
}

export default App;
