import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Sidebar from '../Components/Sidebar'
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [{ path: 'dashboard', element: <Sidebar /> }],
  },
])

export default router
