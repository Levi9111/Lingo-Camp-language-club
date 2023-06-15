import './PopularClasses.css';
import { useEffect, useState } from 'react';

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  //   const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/classes')
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.log(err));
  }, []);
  const popularClasses = classes.filter(
    (languageClass) => languageClass.category === 'popular',
  );

  return (
    <section>
      <h3 className="heading-special">Popular Classes</h3>
      <div className="grid md:grid-cols-3">
        {popularClasses.map((popularClass, index) => (
          <div className="box-wrapper" key={popularClass._id}>
            <figure className="shape-box shape-box_half">
              <img src={popularClass.image} alt="" />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-content">
                  <h3 className="card-no">0{index + 1}</h3>
                  <h4 className="card-main-title">{popularClass.name}</h4>
                </div>
                <div className="card-content">
                  <h3>Instructor: {popularClass.instructor}</h3>
                  <p className="class-content-text">
                    Total number of Students: {popularClass.numStudents}
                  </p>
                  <p className="class-content-text">
                    Available seats: {popularClass.availableSeats}
                  </p>
                  <p className="class-content-text">
                    Price: ${popularClass.price}
                  </p>
                </div>
              </figcaption>
              <span className="after"></span>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
