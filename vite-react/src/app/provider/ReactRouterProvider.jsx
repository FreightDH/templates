import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/pages/layout';
import { HomePageRoute } from '@/pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [HomePageRoute],
  },
]);

export const ReactRouterProvider = () => <RouterProvider router={router} />;
