import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CountryInfo, CountryList, Layout } from './pages/pages'
import './App.css'

function App() {


  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <CountryList />
        },
        {
          path: '/:code/:name',
          element: <CountryInfo />
        }]
    }
  ])

  return (<RouterProvider router={router} />)
}

export default App
