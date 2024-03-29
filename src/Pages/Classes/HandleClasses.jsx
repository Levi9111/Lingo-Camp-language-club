import './Classes.css';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const HandleClasses = ({ course }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, image, instructor, numStudents, price, availableSeats } =
    course;
  const [totalSeats, setTotalSeats] = useState(availableSeats);
  const [totalStudents, setTotalStudents] = useState(numStudents);

  const handleAddCourse = () => {
    const newAvailableSeats = availableSeats - 1;
    const newNumStudents = numStudents + 1;
    setTotalSeats(newAvailableSeats);
    setTotalStudents(newNumStudents);

    if (user && user.email) {
      const addedCourse = {
        courseId: _id,
        name,
        instructor,
        price,
        email: user.email,
      };
      fetch(`https://lingo-camp-server.vercel.app/courses`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(addedCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: 'success',
              title: 'Course Added Successfully',
              showConfirmButton: false,
              timer: 2000, // Specify the duration in milliseconds
            });
          }
        });
    }
  };

  return (
    <div className="card-box">
      <div
        className={`course-card  ${availableSeats > 0 ? 'bg-black' : 'bg-red'}`}
      >
        <h2>{name}</h2>
        <span
          className={`img-span  ${availableSeats > 0 ? 'img-opacity' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></span>
        <div className="course-content">
          <h3>Instructor: {instructor}</h3>
          <p>Total Students: {totalStudents}</p>
          <p className={`${availableSeats > 0 ? '' : 'text-red-500'}`}>
            Seats Available: {totalSeats}
          </p>
          <p>Course Price: ${price}</p>
          <button
            onClick={handleAddCourse}
            className={`w-full px-3 py-2 rounded-md absolute top-48 left-0 ${
              availableSeats <= 0 ? 'bg-gray-300' : 'bg-[#ff0080]'
            }`}
            disabled={availableSeats <= 0}
          >
            Select Course
          </button>
        </div>
      </div>
    </div>
  );
};

HandleClasses.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    numStudents: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    availableSeats: PropTypes.number.isRequired,
  }).isRequired,
};

export default HandleClasses;
