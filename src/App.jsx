
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootPage from './pages/RootPage'

const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import('./pages/Homepage')).default })
      },
      {
        path: '/collections',
        lazy: async () => ({ Component: (await import('./pages/Collections')).default })
      },
      {
        path: '/footer',
        lazy: async () => ({ Component: (await import('./components/Footer')).default })
      },
      {
        path: '/explore',
        lazy: async () => ({ Component: (await import('./pages/ExplorePage')).default })
      },
      {
        path: '/product/:itemId',
        lazy: async () => {
          const module = await import('./components/FashionItemPage')
          return {
            Component: props => <module.default {...props} name="Hoodie De Shartinga" />
          }
        }
      },
      {
        path: '/waitlist',
        lazy: async () => ({ Component: (await import('./pages/AddToWaitlist')).default })
      },
      {
        path: '/about',
        lazy: async () => ({ Component: (await import('./pages/AboutShartinga')).default })
      },
      {
        path: '/events',
        lazy: async () => ({ Component: (await import('./pages/FashionEvents')).default })
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
