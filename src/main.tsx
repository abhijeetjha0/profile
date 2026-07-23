import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './routes/index.tsx';
import './i18n';

const basename = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL : '/abhijeetjha0/';
const router = createBrowserRouter(routes, { basename });

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
