
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutShartinga from './pages/AboutShartinga'
import Homepage from './pages/Homepage'
import ExplorePage from './pages/ExplorePage'
import FashionItemPage from './components/FashionItemPage'
import FashionEvents from './pages/FashionEvents'

 

const router = createBrowserRouter([
  {path: '/', element: <Homepage />}, 
  {path: '/explore', element: <ExplorePage />}, 
  {path: '/product/:itemId', element: <FashionItemPage 
    name="Hoodie De Shartinga" />},
  {path: '/about', element: <AboutShartinga />}, 
  {path: '/events', element: <FashionEvents />}   
])


function App() {

  return <RouterProvider router={router} />

};

export default App;
