import { Suspense, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getListFavoriteItem,
  removeFavoriteItemDoc,
} from "./redux/whistListAction";
import { toast } from "react-toastify";
import { option } from "../../../config/toastOption";
import "./whistlist.css";
const WhistList = () => {
  const dispatch = useDispatch();
  const listFavoriteItem = useSelector(
    (state) => state.favorite.listFavoriteItem,
    shallowEqual
  );
  const removeFavoriteItem = (e, id) => {
    e.preventDefault();
    dispatch(removeFavoriteItemDoc(id));
    toast.success("delete favorite item success", option);
    dispatch(getListFavoriteItem());
  };
  useEffect(() => {
    dispatch(getListFavoriteItem());
  }, [dispatch]);
  return (
    <>
      <Suspense>
        <Breadcrumb />
      </Suspense>
      <div
        className="wishlist wishlist_area customer-page theme-default-margin"
        id="wishlist"
      >
        <div className="container">
          <div className="wishlist_exists">
            {listFavoriteItem.length === 0 ? (
              <div className="row wishlist-grid--empty-list">
                <div className="col-12">
                  <div className="empty-list--info">
                    <h1 className="empty-list--text black">
                      Your wishlist is currently empty!
                    </h1>
                    <p className="">
                      Continue browsing <a href="/shop">here</a>.{" "}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="full-width-container wishlist-container">
                <div className="row">
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-6 wishlist-product-item product-tile-container wishlist-tile-container test-class d-flex flex-wrap w-100 justify-content-around"
                    data-product-handle="lphone-13-white-color"
                  >
                    {listFavoriteItem.map((favoriteItem) => (
                      <div
                        className="wishlist-item position-relative w-25 m-5"
                        key={favoriteItem.id}
                      >
                        <div
                          onClick={(e) =>
                            removeFavoriteItem(e, favoriteItem.id)
                          }
                        >
                          <a
                            className="action-wishlist wishlist-btn wishlist active"
                            href=""
                          >
                            <span className="add-wishlist">
                              <i className="fa-regular fa-heart"></i>
                            </span>
                          </a>
                        </div>
                        <div className="product-tile--tile-media">
                          <a
                            className="tile-media--media-link"
                            href="/products/lphone-13-white-color"
                          >
                            <div className="media-link--image d-flex justify-content-center">
                              <img
                                className="image--main"
                                src={favoriteItem.images}
                                alt="lPhone 13 white color"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="product-tile--tile-content flex text-center">
                          <div className="tile-content--text">
                            <h4 className="post-title">
                              <a href="/products/lphone-13-white-color">
                                {favoriteItem.name}
                              </a>
                            </h4>
                            <p className="text--price pro-price">
                              <span className="price--sale">
                                <span className="money">
                                  ${favoriteItem.price}
                                </span>
                              </span>
                              <del>
                                <span className="price--compare strike-through">
                                  {favoriteItem.salePrice !== null && (
                                    <span className="money">
                                      ${favoriteItem.salePrice}
                                    </span>
                                  )}
                                </span>
                              </del>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default WhistList;
