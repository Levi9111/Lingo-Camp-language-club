import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from '../Components/Spinner/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Spinner></Spinner>;
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
