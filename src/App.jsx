import {BrowserRouter ,Routes,Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import Mainsection from './components/Mainsection';

function App() { 
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/mainsection" element={<Mainsection/>} />
    </Routes>
    
    
    </BrowserRouter>
      )
    }



  // )
  
// }

export default App
