import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Sidebar from '../Components/Sidebar'
import ContectUs from '../Components/ContectUs'
import SliderImgUpload from '../Components/SliderImgUpload'
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Sidebar />,
        children: [{ path: 'contect', element: <ContectUs /> },{
          path: 'slider',
          element: <SliderImgUpload />,
        }],
      },
    ],
  },
])

export default router
