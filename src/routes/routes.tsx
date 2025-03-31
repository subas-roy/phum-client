import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { routeGenerator } from '../utils/routesGenerator';
import { adminPaths } from './admin.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about', // relative path
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/admin',
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/register', // absolute path
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
