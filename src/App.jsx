
// Animation 
import {AnimatePresence} from 'framer-motion';

// router
import {Routes, Route} from 'react-router-dom';

// pages 
import Home from './pages/Home';
import Exposition from './pages/Exposition';
import Workflow from './pages/Workflow';
import Contact from './pages/Contact';
import WebSite from './pages/WebSite';
import Cgu from './pages/Cgu';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exposition' element={<Exposition/>}/>
        <Route path='/workflow' element={<Workflow/>}/>
        <Route path='/me-contactez' element={<Contact/>}/>
        <Route path='/cgu' element={<Cgu/>}/>
        <Route path='/plan-du-site' element={<WebSite/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default App;
