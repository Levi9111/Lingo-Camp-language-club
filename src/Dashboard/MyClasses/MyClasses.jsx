import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

//   data is retrieved
// have to show in the uicd
const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://lingo-camp-server.vercel.app/classes', {
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

  return (
    <section className="table-body" translate="no">
      <h1>
        <span className="yellow">My</span>
        <span className="blue">&lt;</span>Classes
        <span className="blue">&gt;</span>{' '}
      </h1>
      <div className="overflow-x-auto">
        <table className="table-container">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Students Enrolled</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => (
              <tr className="hover" key={classItem._id}>
                <th>{index + 1}</th>
                <td>{classItem.name}</td>
                <td>{classItem.status}</td>
                <td>0</td>
                <td>0</td>
                <td>None</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyClasses;
