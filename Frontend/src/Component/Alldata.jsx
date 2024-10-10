import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Alldata = ({ info }) => {
  const { image } = info;
  console.log(image);
  return (
    <div className="">
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          //   autoplay={{
          //     delay: 2500,
          //   }}
          loop={true}
          navigation={false}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {image.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img className="w-72 h-80" src={img} alt={`Slide ${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <p>{info.location}</p>
      </div>
    </div>
  );
};

export default Alldata;
