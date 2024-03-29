import { useEffect, useState } from 'react';
import './PopularInstructors.css';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('https://lingo-camp-server.vercel.app/instructors')
      .then((res) => res.json())
      .then((data) => setInstructors(data))
  }, []);

  const sortedInstructors = instructors.sort(
    (a, b) => b.numClasses - a.numClasses,
  );

  const popularInstructors = sortedInstructors.slice(0, 6);

  return (
    <section>
      <h3 className="heading-special">Popular Instructors</h3>
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
