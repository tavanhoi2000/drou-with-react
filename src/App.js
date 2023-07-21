import Home from "./pages/UI/Home/Home";
import Header from "./layout/header/Header";
import Shop from "./pages/UI/Shop/Shop";
import Login from "./pages/Form/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Form/Resgister/Register";
import Contact from "./pages/UI/Contact/Contact";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
import DetailProduct from "./pages/UI/Detail/Detail";
import HeaderLogin from "./layout/header/HeaderLogin";
const Footer = lazy(() => import ("./layout/footer/Footer"))

function App() {
  const token = localStorage.getItem('token')
  return (
    <Router>
      <div className="app">
        <ToastContainer />
        {token ? <HeaderLogin /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/account/register" element={<Register />}></Route>
          <Route path="/detail" element={<DetailProduct />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
