/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Payment.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Spinner from '../../Components/Spinner/Spinner';

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_key);
const Payment = () => {
  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);
  const [course, setCourse] = useState(null);

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/courses?email=${user?.email}`,
        );
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user?.email]);

  if (loading) return <Spinner></Spinner>;

  const selectedCourse = course && id && course.find((data) => data._id === id);
  const price = selectedCourse && selectedCourse.price;

  // //////// TODO : price must be a dynamic number
  // const price = 79;

  console.log(selectedCourse);
  console.log('Price:', price, typeof price);

  return (
    <section>
      <div className="wrapper">
        <div className="wrapper-container">
          <div className="wrapper-card">
            <div className="wrapper-top">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1436/1436392.png"
                alt="Card Image"
              />
              <Elements stripe={stripePromise}>
                {/* //////////TODO: Payment must be made dynamic */}
                <CheckoutForm course={selectedCourse} price={89}></CheckoutForm>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
