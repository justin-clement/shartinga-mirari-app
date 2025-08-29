
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutShartinga from './pages/AboutShartinga'
import SizeSelect from './components/SizeSelect'
import ClothingPage from './components/ClothingPage'
import HoodiePhoto from './assets/pictures/guy_in_darkgrey_hoodie.jpg'
import CartIcon from './components/CartIcon'
import LuxClothingPage from './components/FashionItemPage'
import Homepage from './pages/Homepage'
import FashionCard from './components/FashionCard'
import SnookerModel from './assets/pictures/model_at_snooker2.jpg'
import FrameCard from './components/FrameCard'
import ExplorePage from './pages/ExplorePage'
import ScrollToTop from './components/ScrollToTop'
import FashionItemPage from './components/FashionItemPage'

 

const router = createBrowserRouter([
  {path: '/', element: <Homepage />}, 
  {path: '/explore', element: <ExplorePage />}, 
  {path: '/product/:itemId', element: <FashionItemPage 
    src={HoodiePhoto} name="Hoodie De Shartinga" />},
  {path: '/about', element: <AboutShartinga />},
   

  {path: '/test3', element: <CartIcon />},    

])


function App() {

  return <RouterProvider router={router} />

};

export default App;
