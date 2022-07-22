import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homescreen from './screens/Homescreen';
import Footer from './components/Footer';
import Bookingscreen from './screens/Bookingscreen';
import Servicesscreen from './screens/Servicesscreen';
import Homepage from './screens/Homepage';
import Aboutscreen from './screens/Aboutscreen';

function App() {
  return (
    <div className="App">
       <Navbar/>
       {/* <Homescreen/> */}
       <BrowserRouter>
       <Routes>
       <Route path="/home" exact element={<Homescreen />} />
       <Route path='/book/:roomid' element={<Bookingscreen/>}/>
       <Route path='/services' element={<Servicesscreen/>}/>
       <Route path='/about' element={<Aboutscreen/>}/>

       </Routes>
       </BrowserRouter>

       <Footer></Footer>
    </div>
  );
}

export default App;
