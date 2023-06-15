import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem('access_token');
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/users/${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
