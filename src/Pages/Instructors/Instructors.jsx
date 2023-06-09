import { useEffect, useState } from 'react';
import './Instructors.css';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/instructors')
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(instructors);
  return (
    <section className="my-7">
      <h3 className="heading-special">
        Meet Our Expert Instructors at LimboCamp
      </h3>
      <div className="grid md:grid-cols-3 gap-5 max-w-[90%] mx-auto">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img src={instructor.image} alt={instructor.name} className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
              <h4 className="text-xl font-semibold italic">Experts in:</h4>
              {instructor.classesTaken.map((course, index) => (
                <li key={index + 1}> {course}</li>
              ))}
              <div className="card-actions ">
                <div className="badge badge-outline">
                  Total Classes: {instructor.numClasses}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
