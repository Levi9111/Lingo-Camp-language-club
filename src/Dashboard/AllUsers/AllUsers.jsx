import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(`https://lingo-camp-server.vercel.app/users`);
    return res.json();
  });

  const handleMakeInstructor = (user) => {
    fetch(`https://lingo-camp-server.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `${user.name} is now an instructor.`,
            timer: 1200,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    fetch(`https://lingo-camp-server.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `${user.name} is now an admin.`,
            timer: 1200,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <section className="table-body" translate="no">
      <h1>
        <span className="yellow">All</span>
        <span className="blue">&lt;</span>Users
        <span className="blue">&gt;</span>{' '}
      </h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Email</h1>
            </th>
            <th>
              <h1>Make Instructor</h1>
            </th>
            <th>
              <h1>Make Admin</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleMakeInstructor(user)}
                  disabled={user.role2 === 'Instructor'}
                >
                  {user.role2 === 'Instructor'
                    ? 'User is an Instructor'
                    : 'Make User An Instructor'}
                </button>{' '}
              </td>
              <td>
                <button
                  onClick={() => handleMakeAdmin(user)}
                  disabled={user.role1 === 'Admin'}
                >
                  {' '}
                  {user.role1 === 'Admin'
                    ? 'User is an Admin'
                    : 'Make User An Admin'}
                </button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllUsers;
