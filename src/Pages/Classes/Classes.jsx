import './Classes.css';
import { useEffect, useState } from 'react';
import HandleClasses from './HandleClasses';

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://lingo-camp-server.vercel.app/classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const approvedClasses = classes.filter(
    (singleClass) => singleClass.status === 'approved',
  );

  return (
    <section className="">
      <h3 className="heading-special">Join Our Classes.</h3>
      <div className="course--card-body grid md:grid-cols-3 gap-5 py-12">
        {approvedClasses.map((course) => (
          <HandleClasses key={course._id} course={course}></HandleClasses>
        ))}
      </div>
    </section>
  );
};

export default Classes;
