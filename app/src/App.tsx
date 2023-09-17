import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import  {register} from 'swiper/element-bundle'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

register()

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </Router>
  )
}

export default App
