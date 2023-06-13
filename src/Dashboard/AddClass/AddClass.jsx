import { useContext, useState } from 'react';
import './AddClass.css';
import { AuthContext } from '../../Provider/AuthProvider';

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [formVisible, setFormVisible] = useState(true);
  const [formSuccess, setFormSuccess] = useState(false);
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');

  const handleClassButtonClick = (event) => {
    event.preventDefault();

    const newClass = {
      image: classImage,
      name: className,
      instructor: user?.displayName,
      email: user?.email || `No email available`,
      availableSeats: +availableSeats,
      price: +price,
      category: 'good',
    };

    fetch('http://localhost:3000/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the response from the server
        console.log('New class added:', data);
        setFormVisible(false);
        setFormSuccess(true);
      })
      .catch((error) => {
        console.error('Error adding new class:', error);
      });
  };

  return (
    <div className="addclass-wrapper">
      {formVisible && (
        <div className="addclass-container">
          <h1>Welcome</h1>
          <form className="addclass-form">
            <p>{user.displayName}</p>
            <p>{user.email}</p>
            <input
              type="text"
              placeholder="Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Class Image"
              value={classImage}
              onChange={(e) => setClassImage(e.target.value)}
            />
            <input
              type="number"
              placeholder="Available Seats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button id="login-button" onClick={handleClassButtonClick}>
              Add Class
            </button>
          </form>
        </div>
      )}
      {!formVisible && formSuccess && (
        <div className="wrapper form-success">
          {/* Success message or additional content */}
        </div>
      )}
    </div>
  );
};

export default AddClass;
