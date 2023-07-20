import Home from "./pages/UI/Home/Home";
import Header from "./layout/header/Header";
import Shop from "./pages/UI/Shop/Shop";
import Login from './pages/Form/Login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Form/Resgister/Register";
import Contact from "./pages/UI/Contact/Contact";
import Footer from "./layout/footer/Footer";
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/account/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
