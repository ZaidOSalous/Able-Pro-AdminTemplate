import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import ComponentsRoutes from './ComponentsRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

import Loadable from 'components/Loadable';
import { SimpleLayoutType } from 'config';
import SimpleLayout from 'layout/Simple';
import AuthLayout from 'layout/Auth';

// render - landing page
const PagesLanding = Loadable(lazy(() => import('pages/landing')));
// render - login page
const AuthLogin = Loadable(lazy(() => import('pages/auth/auth1/login')));

// ==============================|| ROUTES RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <AuthLogin />
        }
      ]
    },
    {
      path: '/landing',
      element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          index: true,
          element: <PagesLanding />
        }
      ]
    },
    LoginRoutes,
    ComponentsRoutes,
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
