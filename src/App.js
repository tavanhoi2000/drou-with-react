import Home from "./pages/UI/Home/Home";
import Header from "./layout/header/Header";
import Shop from "./pages/UI/Shop/Shop";
import Login from "./pages/Form/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/Form/Resgister/Register";
import Contact from "./pages/UI/Contact/Contact";
import { ToastContainer } from "react-toastify";
import { lazy, useState } from "react";
import Detail from "./pages/UI/Detail/Detail";
import Error from "./pages/UI/Errors/Error";
const Footer = lazy(() => import("./layout/footer/Footer"));

function App() {
  const [isUserLogin, setUserLogin] = useState(false)
  const userAuthentication = () => {
    setUserLogin(!isUserLogin)
    localStorage.removeItem('token')
    console.log(isUserLogin);
  }
  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Header userAuthentication={userAuthentication} isUserLogin={isUserLogin}/>
        <Routes>
            <Route path="*" element={<Error />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/:shopId" element={<Detail />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route userAuthentication={userAuthentication} isUserLogin={isUserLogin} setUserLogin={setUserLogin} path="/login" element={<Login />} ></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
