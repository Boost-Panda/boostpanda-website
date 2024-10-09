import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/pages/home/App.tsx';
import Dentistry from '@/pages/dentistry/Dentistry.tsx';
import ErrorPage from '@/ErrorPage.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import '@/index.css';

import { createHashRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { Layout } from '@/components/Layout';

const router = createHashRouter(
  [
    {
      path: '/',
      element: (
        <>
          <Layout>
            <App />
          </Layout>
          <ScrollRestoration />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/industry/dentistry',
      element: (
        <>
          <Layout>
            <Dentistry />
          </Layout>
          <ScrollRestoration />
        </>
      ),
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
