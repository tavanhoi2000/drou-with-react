import { Link } from "react-router-dom";
import "./header.scss";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken, removeToken } from '../../hooks'
function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userLogin = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => userLogin;
  }, [user]);
  const logout = () => {
    signOut(auth).then(() => {
      removeToken('token')
      return navigate("/login");
    })
      
  };

    return (
      <>
        <header>
          <div className="header__left">
            <ul>
              <li>(+84)123 456 7890</li> |
              <li>
                <a to="">Store Location</a>
              </li>
            </ul>
          </div>
          <div className="header__middle">
            Tell a friend about Drou & get 20% off*
          </div>
          <div className="header__right">
            <ul>
              
              <li> USD </li> |
              {user && getToken('token') ? (
                <ul>
                  <li>Hello: 
                    <Link to="/profile"> {user.displayName}</Link>
                  </li>{" "}
                  /
                  <li>
                    <Link onClick={logout}>Logout</Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <Link to="/login">Sign In</Link>
                  </li>{" "}
                  /
                  <li>
                    <Link to="/register">Sign Up</Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </header>
        <hr />
        <div className="container">
          <nav>
            <div className="nav__logo">
              <img src="images/logo_300x300.png" alt="logo" />
            </div>
            <div className="nav__menu-pages">
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/shop">shop</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </div>
            <div className="nav__items d-flex justify-content-around">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-heart" />
              <Link to='/cart'><i className="fa-solid fa-bag-shopping"></i></Link>
            </div>
          </nav>
        </div>
        <hr/>
      </>
    );
  }

export default Header;
