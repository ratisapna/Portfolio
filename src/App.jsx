import './App.css'
import Navbar from './component/Navbar' 
import Home from './component/Home'
import Contact from './component/Contact'
import Project from './component/Project'
import Skills from './component/Skills'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  
const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar /><Home /></>
  },
  {path:"/contact",
  element: <><Navbar /><Contact /></>
  },
  {
    path:"/project",
    element: <><Navbar /><Project /></>
  },
  {
    path:"/skills",
    element: <><Navbar /><Skills /></>
  },
])

return(
<RouterProvider router={router} />
)
}
export default App
