import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import { listSlide } from "../data";
import SwiperCore from 'swiper';
import 'swiper/css'
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../assets/css/slider.css'
import Aos from "aos";

SwiperCore.use([Autoplay])

Aos.init()

function Slider() {
  return (
    <div className='slider'>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation
        autoplay={{ delay:3000 }}
        pagination={{ clickable: true}}
        loop
        className="mySwiper"
      >
        {listSlide.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="item"
              style={{ backgroundImage: `url("images/${item.img}")` }}
            >
              <div className="content container">
                <h4 className="title">{item.title}</h4>
                <h1 className="name">{item.name}</h1>
                <p className="description">{item.description}</p>
                <button>
                  Shop Now <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
