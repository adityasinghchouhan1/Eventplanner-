import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Sidebar from '../Components/Sidebar'
import ContectUs from '../Components/ContectUs'
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Sidebar />,
        children: [{ path: 'contect', element: <ContectUs /> }],
      },
    ],
  },
])

export default router
