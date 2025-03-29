import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateStudent from '../pages/admin/CreateStudent';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';

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
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        path: 'create-student',
        element: <CreateStudent />,
      },
    ],
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
