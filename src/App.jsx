
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutShartinga from './pages/AboutShartinga'
import Homepage from './pages/Homepage'
import ExplorePage from './pages/ExplorePage'
import FashionItemPage from './components/FashionItemPage'
import FashionEvents from './pages/FashionEvents'
import RootPage from './pages/RootPage'
import AddToWaitlist from './pages/AddToWaitlist'
import Footer from './components/Footer'


const router = createBrowserRouter([
  {
    element: <RootPage />, 
    children: [
      {path: '/', element: <Homepage />}, 
      {path: '/footer', element: <Footer />}, 
      {path: '/explore', element: <ExplorePage />}, 
      {path: '/product/:itemId', element: <FashionItemPage 
        name="Hoodie De Shartinga" />}, 
      {path: '/waitlist/:productId', element: <AddToWaitlist />},
      {path: '/about', element: <AboutShartinga />}, 
      {path: '/events', element: <FashionEvents />}
    ]
  }
])


function App() {

  return <RouterProvider router={router} />

};

export default App;
