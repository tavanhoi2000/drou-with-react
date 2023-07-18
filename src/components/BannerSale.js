import { useEffect } from "react"

function BannerSale() {
//     useEffect(() => {
//         const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;
    
//       let today = new Date(),
//         dd = String(today.getDate()).padStart(2, "0"),
//         mm = String(today.getMonth() + 1).padStart(2, "0"),
//         yyyy = today.getFullYear(),
//         nextYear = yyyy + 1,
//         dayMonth = "5/11/",
//         end_sale = dayMonth + yyyy;
    
//         today = mm + "/" + dd + "/" + yyyy;
//       if (today > end_sale) {
//         end_sale = dayMonth + nextYear}
//       const latest_product = 8
//       //   // blog_event: 10,
    
//         const countDown = new Date(end_sale).getTime(),
//         x = setInterval(function () {
//           const now = new Date().getTime(),
//             distance = countDown - now;
    
//           (document.getElementById("days").innerText = Math.floor(
//             distance / day
//           )),
//             (document.getElementById("hours").innerText = Math.floor(
//               (distance % day) / hour
//             )),
//             (document.getElementById("minutes").innerText = Math.floor(
//               (distance % hour) / minute
//             )),
//             (document.getElementById("seconds").innerText = Math.floor(
//               (distance % minute) / second
//             ));
    
//           if (distance < 0) {
//             document.getElementById("headline").innerText = "It's my birthday!";
//             document.getElementById("countdown").style.display = "none";
//             document.getElementById("content").style.display = "block";
//             clearInterval(x);
//           }
//         }, 0)
// })

    return (
        <div className="sale_banner box_content">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content">
                  <h5>Hurry Up !</h5>
                  <h6>
                    Up To 25% Discount <br />
                    Check it Out
                  </h6>
                  <div className="time">
                    <div className="item days">
                      <span id="days">360</span> <br />
                      <p>DAYS</p>
                    </div>
                    <div className="item HRS">
                      <span id="hours">06</span> <br />
                      <p>HRS</p>
                    </div>
                    <div className="item MINS">
                      <span id="minutes">19</span> <br />
                      <p>MINS</p>
                    </div>
                    <div className="item SECS">
                      <span id="seconds">51</span> <br />
                      <p>SECS</p>
                    </div>
                  </div>
                  <br />
                  <span className="show_now">Shop Now</span>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
    )
}

export default BannerSale