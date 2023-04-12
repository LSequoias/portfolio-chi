
// Animation 
import {AnimatePresence} from 'framer-motion';

import Tmp from './pages/Tmp';

// router
import {Routes, Route} from 'react-router-dom';

// pages 
import Home from './pages/Home';
import Exposition from './pages/Exposition';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


const App = () => {

  
  return (
      <AnimatePresence mode="wait">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exposition' element={<Exposition/>}/>
            <Route path='/me-contactez' element={<Contact/>}/>
            <Route path='/tmp' element={<Tmp/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </AnimatePresence>
    )
}

export default App;
