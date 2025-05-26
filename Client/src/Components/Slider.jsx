// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from 'react'
import SummaryApi from '../Common/SummaryApi'
// import S1 from '../../public/S1.jpg'
// import S2 from '../../public/S2.webp'
// import S3 from '../../public/S3.jpg'

export default () => {
  const [Sdata, setSData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(SummaryApi.getsliderdata.url)

        if (Array.isArray(res.data)) {
          setSData(res.data)
        } else if (Array.isArray(res.data.data)) {
          setSData(res.data.data)
        } else {
          console.warn('Unexpected slider data format')
          setSData([])
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchdata()
  }, [])

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
          {Array.isArray(Sdata) &&
            Sdata?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-[100vh] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center"
                  style={{
                    backgroundImage: item?.image
                      ? `url(${SummaryApi.getsliderdata.imageBaseUrl}/${item.image})`
                      : 'none',
                  }}
                >
                  <div className=" absolute bottom-10 sm:left-8 left-0  gap-6 flex flex-col justify-start items-start p-5">
                    <h1 className="text-6xl font-Robot ont-bold text-white ">
                      {item.title}
                    </h1>
                    <p
                      className="sm:text-sm text-xs
                    font-Yellowtail2
                    
                    text-white text-start  "
                    >
                      {item.description}
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
