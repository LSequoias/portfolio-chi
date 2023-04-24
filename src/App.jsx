
// Animation 
import {AnimatePresence} from 'framer-motion';

// router
import {Routes, Route} from 'react-router-dom';

// pages 
import Home from './pages/Home';
import Exposition from './pages/Exposition';
import Workflow from './pages/Workflow';
import Contact from './pages/Contact';
import CGU from './pages/CGU';
import WebSite from './pages/WebSite';
import NotFound from './pages/NotFound';
import Workflow from './pages/Workflow';


const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exposition' element={<Exposition/>}/>
        <Route path='/workflow' element={<Workflow/>}/>
        <Route path='/me-contactez' element={<Contact/>}/>
        <Route path='/plan-du-site' element={<WebSite/>}/>
        <Route path='/conditions-general-utilisation' element={<CGU/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default App;
