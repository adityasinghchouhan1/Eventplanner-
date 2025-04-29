import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Components/Home'
import About from '../Components/About'
import Services from '../Components/Services'
import Contact from '../Components/Contact'

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
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Services',
        element: <Services />,
      },
    ],
  },
])

export default router
