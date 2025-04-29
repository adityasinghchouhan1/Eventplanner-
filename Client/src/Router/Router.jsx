import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Components/Home'
import About from '../Components/About'
import Contect from '../Components/Contect'
import Services from '../Components/Services'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Contect',
        element: <Contect />,
      },
      {
        path: 'Services',
        element: <Services />,
      },
    ],
  },
])

export default router
