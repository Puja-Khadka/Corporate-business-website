import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import ServicesDetails from './Components/Services/ServicesDetails.jsx'
import ProjectsDetails from './Components/Projects/ProjectsDetails.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
   
const Router=createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path='services/details' element={<ServicesDetails/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='projects/details' element={<ProjectsDetails/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
  </Route>
 )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router}/>
  </StrictMode>,
)
