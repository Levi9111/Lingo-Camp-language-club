import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home/Home';
import Error from '../Error/Error';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Instructors from '../Pages/Instructors/Instructors';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>,
      },
    ],
  },
]);
