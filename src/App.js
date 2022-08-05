import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home/Home';
import NavigationBar from'./Components/NavigationBar/NavigationBar'
import About from './Components/Pages/About/About'

import ProjectDetails from './Components/Pages/Projects/ProjectDetails'
import Certifications from './Components/Pages/Certifications/Certifications';
import Footer from './Components/Footer/Footer';


export default function App() {
  return(
    <div className='overall-container'>
     <Routes>
      <Route path="/" element={<NavigationBar/>}>
        
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}/>
      </Route>
    </Routes>
    <Footer/>
    </div>
   )
}
