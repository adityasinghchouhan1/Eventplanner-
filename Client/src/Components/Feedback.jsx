import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaQuoteLeft } from 'react-icons/fa'
import p from '../../public/p.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import Heading from '../Resue/Heading'

// Sample couple feedback data
const feedbackData = [
  {
    name: 'Rahul & Priya',
    image: p, // Ensure this is in your public folder or import if in src
    feedback:
      'We are beyond happy with the wedding planner agency! Every moment was magical and stress-free. Thank you for making our dream wedding a reality!',
  },
  {
    name: 'Aman & Sneha',
    image: p2,
    feedback:
      'The team was extremely professional and caring. From decor to coordination, everything was perfect. Highly recommend!',
  },
  {
    name: 'Vikram & Meera',
    image: p3,
    feedback:
      'It felt like a fairytale. The planners took care of every detail. We just focused on enjoying our day. Wonderful experience!',
  },
]

export default function CoupleFeedbackSlider() {
  return (
    <div className="w-full h-[80vh] flex-col bg-white flex items-center justify-center px-4">
      <Heading
        title={'Testimonials'}
        discription={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam laboriosam'
        }
      />
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {feedbackData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden p-6">
              <img
                src={item.image}
                alt={`${item.name}`}
                className="w-64 h-64 object-cover rounded-full border-4 border-pink-300 shadow-md mb-6 md:mb-0 md:mr-10"
              />
              <div className="max-w-xl text-center md:text-left bg-gray-200 p-5">
                <FaQuoteLeft className="text-pink-400 text-3xl mb-4" />
                <p className="text-lg text-gray-700 mb-6 italic">
                  “{item.feedback}”
                </p>
                <h3 className="text-xl font-bold text-pink-600">
                  – {item.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
