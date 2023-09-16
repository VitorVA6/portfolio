import './App.css'
import Main from './pages/Main'
import  {register} from 'swiper/element-bundle'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

register()

function App() {
  return (
    <>
      <Main />
    </>
  )
}

export default App
