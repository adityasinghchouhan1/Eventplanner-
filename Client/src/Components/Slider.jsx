// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useState } from 'react'

import S1 from '../../public/S1.jpg'
import S2 from '../../public/S2.webp'
import S3 from '../../public/S3.jpg'

export default () => {
  // const [data, setData] = useState([])

  const data = [
    {
      img: S1,
    },
    {
      img: S2,
    },
    {
      img: S3,
    },
  ]
  return (
    <>
      <div className="w-full z-0 overflow-hidden h-[100vh]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[100vh] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className=" absolute bottom-10 sm:left-8 left-0  gap-6 flex flex-col justify-start items-start p-5">
                  <h1 className="text-6xl font-sans font-bold text-white ">
                    The Wedding Planner
                  </h1>
                  <p className="sm:text-sm text-xs font-mono text-white text-start  ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Blanditiis, perspiciatis voluptates. Consectetur hic facilis
                    delectus quasi ratione ipsa, veniam tempore adipisci,
                    aspernatur corrupti, fugiat eum sapiente voluptas at
                    provident unde.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
