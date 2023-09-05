import "./shop.css";
import { useState, lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import {getListCategory, getListProduct} from './redux/shopAction'
const Breadcrumb = lazy(() => import("../../../components/Breadcrumb"));
function Shop() {
  const [listProduct, setListProduct] = useState([]);
  const dispatch = useDispatch()
  const products = useSelector((state) => state.shop.shopProducts)
  const categories = useSelector((state) => state.shop.categories)
  const [filteredList, setFilteredList] = useState(products);
  useEffect(() => {
    dispatch(getListProduct())
    dispatch(getListCategory())
  }, [dispatch]);
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updateList = [...listProduct];
    updateList = updateList.filter(
      (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilteredList(updateList);
  };
  return (
    <main>
      <Suspense>
        <Breadcrumb />
      </Suspense>
      <div
        id="shopify-section-template--14772521828439__main"
        className="shopify-section"
      >
        <div className="main-shop-page ptb-90">
          <div className="custom-container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9  col-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="grid-list-top border-default universal-padding d-md-flex justify-content-md-between align-items-center mb-30">
                      <div className="grid-list-view d-flex align-items-center  mb-sm-15">
                        <button className="change-view active" data-view="grid">
                          <i className="fa fa-th"></i>
                        </button>
                        <button className="change-view" data-view="list">
                          <i className="fa fa-list-ul"></i>
                        </button>
                      </div>
                      <span className="show-items">
                        Showing 1 - 9 of {products.length} result
                      </span>
                      <div className="main-toolbar-sorter clearfix">
                        <div className="toolbar-sorter d-md-flex align-items-center">
                          <label htmlFor="SortBy">Sort by:</label>
                          <select
                            className="sorter wide"
                            name="SortBy"
                            id="SortBy"
                          >
                            <option value="manual">Featured</option>
                            <option value="best-selling">Best Selling</option>
                            <option value="title-ascending">
                              Alphabetically, A-Z
                            </option>
                            <option value="title-descending">
                              Alphabetically, Z-A
                            </option>
                            <option value="price-ascending">
                              Price, low to high
                            </option>
                            <option value="price-descending">
                              Price, high to low
                            </option>
                            <option value="created-descending">
                              Date, new to old
                            </option>
                            <option value="created-ascending">
                              Date, old to new
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-grid">
                  <div className="product-grid-view">
                    <div className="row">
                      {products.map((item) => (
                        <div
                          className="col-lg-4 col-md-4 col-sm-6 col-12"
                          key={item.id}
                        >
                          <div className="single-product-wrap 40092812050519">
                            <div className="product-img-action-wrap mb-20">
                              <div className="product-img product-img-zoom">
                                <Link to={`/shop/${item.id}`}>
                                  <img
                                    className="popup_cart_image default-img"
                                    src={item.images}
                                    alt={item.name}
                                  />

                                  <img
                                    className="hover-img "
                                    src={item.subImg}
                                    alt={item.name}
                                  />
                                </Link>
                              </div>

                              <div className="product-action-1">
                                <button
                                >
                                  <i className="far fa-shopping-bag"></i>
                                </button>

                                <span className="nrb_wlist">
                                  <a
                                    title=""
                                    className="action-wishlist wishlist-btn wishlist"
                                    href=""
                                  >
                                    <span className="add-wishlist">
                                      <i className="far fa-heart"></i>
                                    </span>
                                    <span className="loading-wishlist">
                                      <i className="fa fa-spinner animated rotateIn infinite"></i>{" "}
                                    </span>
                                    <span className="remove-wishlist">
                                      <i className="fas fa-heart"></i>
                                    </span>
                                  </a>
                                </span>
                                <button className="compare compare_btn">
                                  <i className="far fa-signal"></i>
                                </button>
                              </div>
                            </div>

                            <div className="product-content-wrap">
                              <span className="shopify-product-reviews-badge"></span>
                              <h2>
                                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                              </h2>
                              <div className="product-price">
                                <span className="price">
                                  <span className="money">
                                    ${item.price}.00
                                  </span>
                                </span>

                                <span className="prev-price">
                                  {item.salePrice && (
                                    <del className="money">
                                      ${item.salePrice}.00
                                    </del>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div> 
                      ))}
                    </div>
                    <div className="shop_pagi">
                      <div className="pro-pagination-style text-center mt-55">
                        <ul className="">
                          <li className="disabled prev">
                            <a href="#">
                              <i className="fa-solid fa-chevron-left"></i>
                            </a>
                          </li>

                          <li>
                            <a className="active" href="">
                              1
                            </a>
                          </li>

                          <li>
                            <a href="/collections/all?page=2" title="">
                              2
                            </a>
                          </li>

                          <li className="next">
                            <a
                              href="/collections/all?page=2"
                              title="Next &raquo;"
                            >
                              <i className="fa-solid fa-chevron-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mt-all-40">
                <div className="sidebar shop-sidebar">
                  <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-2 mb-20">
                    <h4 className="sidebar-widget-title">Search </h4>

                    <div className="search-style-3">
                      <form  method="get">
                        <input
                          type="search"
                          placeholder="Search our store "
                          aria-label="Search our store "
                          onChange={filterBySearch}
                        />
                      </form>
                    </div>
                  </div>

                  <div className="single-widget widget-recommended-products mt-30">
                    <h3 className="sidebar-title">Top rated products</h3>
                    <div className="recommended-products-slider-2 slider-navigation-2 slider-navigation-2-m0">
                      <div className="product-slider-col">
                        <article className="hoproduct hoproduct-4">
                          <div className="hoproduct-image">
                            <a
                              className="hoproduct-thumb"
                              href="/collections/all/products/drou-watch-ultra"
                            >
                              <img
                                className="hoproduct-frontimage"
                                src="//drou-electronics-store.myshopify.com/cdn/shop/products/13_800X800_crop_center.jpg?v=1674275345"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="hoproduct-content">
                            <h5 className="hoproduct-title">
                              <a href="/collections/all/products/drou-watch-ultra">
                                Drou watch ultra
                              </a>
                            </h5>
                            <div className="hoproduct-rattingbox">
                              <div className="rattingbox">
                                <span
                                  className="shopify-product-reviews-badge"
                                  data-id="6852111532119"
                                ></span>
                              </div>
                            </div>
                            <div className="hoproduct-pricebox">
                              <div className="pricebox">
                                <del className="oldprice">
                                  <span className="money">$85.00</span>
                                </del>

                                <span className="price">
                                  <span className="money">$70.00</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="product-slider-col">
                        <article className="hoproduct hoproduct-4">
                          <div className="hoproduct-image">
                            <a
                              className="hoproduct-thumb"
                              href="/collections/all/products/droubook-air-space-gray"
                            >
                              <img
                                className="hoproduct-frontimage"
                                src="//drou-electronics-store.myshopify.com/cdn/shop/products/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_800X800_crop_center.jpg?v=1674275324"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="hoproduct-content">
                            <h5 className="hoproduct-title">
                              <a href="/collections/all/products/droubook-air-space-gray">
                                Droubook space gray
                              </a>
                            </h5>
                            <div className="hoproduct-rattingbox">
                              <div className="rattingbox">
                                <span
                                  className="shopify-product-reviews-badge"
                                  data-id="6852111401047"
                                ></span>
                              </div>
                            </div>
                            <div className="hoproduct-pricebox">
                              <div className="pricebox">
                                <span className="price">
                                  <span className="money">$80.00</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="product-slider-col">
                        <article className="hoproduct hoproduct-4">
                          <div className="hoproduct-image">
                            <a
                              className="hoproduct-thumb"
                              href="/collections/all/products/homepod-mini-2022"
                            >
                              <img
                                className="hoproduct-frontimage"
                                src="//drou-electronics-store.myshopify.com/cdn/shop/products/11_c6c97b67-edac-48bd-8e5c-cf0de5e9e3cb_800X800_crop_center.jpg?v=1674275302"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="hoproduct-content">
                            <h5 className="hoproduct-title">
                              <a href="/collections/all/products/homepod-mini-2022">
                                Homepod mini 2022
                              </a>
                            </h5>
                            <div className="hoproduct-rattingbox">
                              <div className="rattingbox">
                                <span
                                  className="shopify-product-reviews-badge"
                                  data-id="6852111204439"
                                ></span>
                              </div>
                            </div>
                            <div className="hoproduct-pricebox">
                              <div className="pricebox">
                                <del className="oldprice">
                                  <span className="money">$60.00</span>
                                </del>

                                <span className="price">
                                  <span className="money">$39.00</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>

                  <aside className="sidebar-categorie mb-30">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="sidbar-style">
                      {categories.map((category) => 
                      <li className="" key={category.id}>
                        <a href="">
                          {category.name} <span>(9)</span>
                        </a>
                      </li>
                      )}
                    </ul>
                  </aside>

                  <aside className="size mb-30">
                    <h3 className="sidebar-title">Size</h3>
                    <ul className="size-list sidbar-style">
                      <li>
                        <a href="/collections/all/s">s</a>
                      </li>

                      <li>
                        <a href="/collections/all/m">m</a>
                      </li>

                      <li>
                        <a href="/collections/all/l">l</a>
                      </li>

                      <li>
                        <a href="/collections/all/xl">xl</a>
                      </li>

                      <li>
                        <a href="/collections/all/xxl">xxl</a>
                      </li>
                    </ul>
                  </aside>

                  <div className="sidebar-tags sidebar-categorie">
                    <h3 className="sidebar-title">Tags</h3>
                    <ul className="sidbar-style">
                      <li>
                        <a href="/collections/all/black">black</a>
                      </li>
                      <li>
                        <a href="/collections/all/blue">blue</a>
                      </li>
                      <li>
                        <a href="/collections/all/fiber">fiber</a>
                      </li>
                      <li>
                        <a href="/collections/all/gold">gold</a>
                      </li>
                      <li>
                        <a href="/collections/all/gray">gray</a>
                      </li>
                      <li>
                        <a href="/collections/all/green">green</a>
                      </li>
                      <li>
                        <a href="/collections/all/l">l</a>
                      </li>
                      <li>
                        <a href="/collections/all/leather">leather</a>
                      </li>
                      <li>
                        <a href="/collections/all/m">m</a>
                      </li>
                      <li>
                        <a href="/collections/all/magenta">magenta</a>
                      </li>
                      <li>
                        <a href="/collections/all/maroon">maroon</a>
                      </li>
                      <li>
                        <a href="/collections/all/metal">metal</a>
                      </li>
                      <li>
                        <a href="/collections/all/navy">navy</a>
                      </li>
                      <li>
                        <a href="/collections/all/opt1">opt1</a>
                      </li>
                      <li>
                        <a href="/collections/all/opt2">opt2</a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Shop;
