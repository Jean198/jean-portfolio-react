import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home/Home';
import NavigationBar from'./Components/NavigationBar/NavigationBar'
import About from './Components/Pages/About/About'


export default function App() {
  return(
    <div className='overall-container'>

     <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Route>

      
    </Routes>

    </div>
    
   )
}

