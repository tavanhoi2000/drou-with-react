import { Link } from 'react-router-dom';
import './Header.scss'
function Header() {
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
            <ul>
              <li>
                <Link to="/account/login">Log In</Link>
              </li>{" "}
              /
              <li>
                <Link to="/account/register">Sign Up</Link>
              </li>
            </ul>
          </ul>
        </div>
      </header>
      <hr/>
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
            <i className="fa-light fa-cart-shopping"></i>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
