import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

//   data is retrieved
// have to show in the ui
const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetch('http://localhost:3000/classes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const myClasses = data.filter(
          (classItem) => classItem.email === user.email,
        );
        setClasses(myClasses);
      });
  }, [user]);

  console.log(classes);

  return (
    <div>
      <h1>My Classes</h1>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem._id}>{classItem.className}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyClasses;
