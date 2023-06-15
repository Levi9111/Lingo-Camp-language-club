import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home/Home';
import Error from '../Error/Error';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Instructors from '../Pages/Instructors/Instructors';
import Classes from '../Pages/Classes/Classes';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import MyCourses from '../Dashboard/MyCourses/MyCourses';
import PrivateRoute from './PrivateRoute';
import Payment from '../Pages/Payment/Payment';
import History from '../Dashboard/History/History';
import AddClass from '../Dashboard/AddClass/AddClass';
import MyClasses from '../Dashboard/MyClasses/MyClasses';

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
      {
        path: 'classes',
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: '',
        element: <History></History>,
      },
      {
        path: 'courses/payment/:id',
        element: <Payment></Payment>,
      },
      {
        path: 'history',
        element: <History></History>,
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>,
      },
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>,
      },
      {
        path: 'mycourses',
        element: (
          <PrivateRoute>
            <MyCourses></MyCourses>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
