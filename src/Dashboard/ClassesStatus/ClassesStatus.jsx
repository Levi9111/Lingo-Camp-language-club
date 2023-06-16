import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ClassesStatus = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch('https://lingo-camp-server.vercel.app/classes')
      .then((res) => res.json())
      .then((data) => {
        const pendingClasses = data.filter((item) => item.status === 'pending');
        setClasses(pendingClasses);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  const handleApproveBtn = (classItem) => {
    fetch(
      `https://lingo-camp-server.vercel.app/classes/approve/${classItem._id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: `${classItem.name} Approved`,
            icon: 'success',
          });
        }
      });
  };

  const handleDenyBtn = (classItem) => {
    fetch(
      `https://lingo-camp-server.vercel.app/classes/deny/${classItem._id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: `${classItem.name} Denied`,
            icon: 'error',
          });
        }
      });
  };

  console.log(classes);
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
              <th>Instructor</th>
              <th>Price</th>
              <th>Deny</th>
              <th>Approve</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => (
              <tr className="hover" key={classItem._id}>
                <th>{index + 1}</th>
                <td>{classItem.name}</td>
                <td>{classItem.instructor}</td>
                <td>{classItem.price}</td>
                <td>
                  <button onClick={() => handleDenyBtn(classItem)}>Deny</button>
                </td>
                <td>
                  <button onClick={() => handleApproveBtn(classItem)}>
                    Approve
                  </button>
                </td>
                <td
                  className={
                    classItem.status === 'pending'
                      ? 'text-yellow-400'
                      : classItem.status === 'approved'
                      ? 'text-green-400'
                      : classItem.status === 'denied'
                      ? 'text-red-400'
                      : ''
                  }
                >
                  {classItem.status}
                </td>

                <td>FeedBack</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClassesStatus;
