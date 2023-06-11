import './MyCourses.css';
import useCourse from '../../Hooks/useCourse';
import Swal from 'sweetalert2';

const MyCourses = () => {
  const [course, refetch] = useCourse();
  console.log(course);

  const handleDeleteCourse = (course) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this course!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:3000/courses/${course._id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'The course has been deleted.',
                icon: 'success',
                timer: 1200,
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };
  return (
    <section className="table-body" translate="no">
      <h1>
        <span className="yellow">My</span>
        <span className="blue">&lt;</span>Courses
        <span className="blue">&gt;</span>{' '}
      </h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Instructor</h1>
            </th>
            <th>
              <h1>Price</h1>
            </th>
            <th>
              <h1>Pay</h1>
            </th>
            <th>
              <h1>Delete</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {course.map((singleCourse) => (
            <tr key={singleCourse._id}>
              <td>{singleCourse.name}</td>
              <td>{singleCourse.instructor}</td>
              <td>${singleCourse.price}</td>
              <td>
                <button>Pay</button>
              </td>
              <td>
                <button onClick={() => handleDeleteCourse(singleCourse)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyCourses;
