import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./screens/Frontpage";
import Footer from "./components/Footer";
import Bookingscreen from "./screens/Bookingscreen";
import Servicesscreen from "./screens/Servicesscreen";
import Aboutscreen from "./screens/Aboutscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Homescreen from "./screens/Homescreen";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      {/* <Homescreen/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Frontpage />} />
          <Route path="/home" exact element={<Homescreen />} />
          <Route
            path="/book/:roomid/:fromdate/:todate"
            element={<Bookingscreen />}
          />
          <Route path="/services" element={<Servicesscreen />} />
          <Route path="/about" element={<Aboutscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/admin" element={<Adminscreen />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
