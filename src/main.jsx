import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Provider from './Context/Provider.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
