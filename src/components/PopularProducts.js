function PopularProducts() {
    return(
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
              <div className="item" v-for="item in latest_product">
                <div className="img">
                  <div className="show">
                    <img src="images/product_1.jpg" alt="" />
                  </div>
                  <div className="hide">
                    <img src="images/sub_product_1.jpg" alt="" />
                  </div>
                </div>
                <div className="content">
                  <span className="name">AirPods Pro white</span>
                  <h4 className="price">$80.00 USD</h4>
                </div>
              </div>
            </div>
          </div>
    )
}


export default PopularProducts