import { popularProducts } from "../data";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  addToWhistListDoc,
  addToCartDoc,
} from "../pages/UI/Detail/redux/detailAction";
import { option } from "../config/toastOption";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getToken } from "../hooks";
import { useDispatch } from "react-redux";
function PopularProducts({ setShowModalCompare }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToWishList = (e, param) => {
    e.preventDefault();
    if (getToken("token") !== null) {
      dispatch(addToWhistListDoc(param));
      toast.success("You added to favorite", option);
    } else {
      toast.error("Please login", option);
      navigate("/login");
    }
  };
  const addToCart = (e, param) => {
    e.preventDefault();
    if (getToken("token") !== null) {
      dispatch(addToCartDoc(param));
      toast.success("You added to cart", option);
    } else {
      toast.error("Please login", option);
      navigate("/login");
    }
  };
  return (
    <div className="popular_product box_content">
      <div className="head">
        <h3 className="title">Popular Products</h3>
        <div className="categories">
          <ul>
            <li>Accessories</li>
            <li>iPhone</li>
            <li>Laptop</li>
          </ul>
        </div>
      </div>
      <div className="list">
        {popularProducts.map((item, index) => (
          <div className="item" key={index}>
            <div className="img" style={{ marginBottom: 60 }}>
              <div className="show">
                <img src={window.location.origin + "/" + item.images} alt="" />
              </div>
              <div className="hide positon-relative">
                <img src={window.location.origin + "/" + item.subImg} alt="" />
                <div className="hide-icon d-flex justify-content-center align-items-center w-75 position-absolute">
                  <OverlayTrigger overlay={<Tooltip>Add to cart</Tooltip>}>
                    <i
                      onClick={(e) => addToCart(e, item)}
                      className="fa-solid fa-bag-shopping"
                    ></i>
                  </OverlayTrigger>
                  <OverlayTrigger overlay={<Tooltip>Add to wishlist</Tooltip>}>
                    <i
                      onClick={(e) => addToWishList(e, item)}
                      className="fa-regular fa-heart mx-2"
                    ></i>
                  </OverlayTrigger>
                  <OverlayTrigger overlay={<Tooltip>Compare</Tooltip>}>
                    <i
                      onClick={() => setShowModalCompare(true)}
                      className="fa-solid fa-signal"
                    ></i>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            <div className="content">
              <span className="name">{item.name}</span>
              <h4 className="price">${item.price}.00</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
