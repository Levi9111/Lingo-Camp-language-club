import { useEffect, useState } from 'react';
import './PopularInstructors.css';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('instructors.json')
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  }, []);

  const sortedInstructors = instructors.sort(
    (a, b) => b.numClasses - a.numClasses,
  );

  const popularInstructors = sortedInstructors.slice(0, 6);

  console.log(popularInstructors);

  return (
    <section>
      <h3 className="text-center text-2xl underline italic mb-5 font-semibold text-violet-800">
        Popular Instructors
      </h3>
      <div className="grid md:grid-cols-3 gap-5 mx-auto my-12">
        {popularInstructors.map((instructor) => (
          <div
            className="profile-card"
            style={{ backgroundImage: `url(${instructor.image})` }}
            key={instructor._id}
          >
            <div className="info">
              <h2>{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
              <p>Total Classes: {instructor.numClasses}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
