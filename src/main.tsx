import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/pages/home/App.tsx';
import Dentistry from '@/pages/dentistry/Dentistry.tsx';
import ErrorPage from '@/ErrorPage.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import '@/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/industry/dentistry',
      element: <Dentistry />,
    },
  ],
  { basename: '/' }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
