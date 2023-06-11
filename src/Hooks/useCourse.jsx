import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useCourse = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const token = localStorage.getItem('access_token');

  const { refetch, data: course = [] } = useQuery({
    queryKey: ['course', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/courses?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        },
      );
      return res.json();
    },
  });

  return [course, refetch];
};

export default useCourse;
