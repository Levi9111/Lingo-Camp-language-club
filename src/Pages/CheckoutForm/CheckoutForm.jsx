/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ course, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError('');
    }

    async function fetchEmail() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const email = user?.email;
          resolve(email);
        }, 3000);
      });
    }

    const asyncEmail = await fetchEmail(); // email fetched asynchronously, as it shows undefined
    console.log(asyncEmail);

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: asyncEmail,
            name: user?.name || 'No name available',
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log(`Payment Intent`, paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === `succeeded`) {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: asyncEmail,
        transactionId: paymentIntent._id,
        price: +price,
        date: new Date().toLocaleDateString('en-US'),
        quantity: 1,
        courseIdentity: course._id,
        courseListIdentity: course.courseId,
        status: 'service pending',
        courseName: course.name,
      };

      axiosSecure
        .post('/payment', payment)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertResult.insertedId) {
            // Display confirmation or redirect to success page
            Swal.fire({
              icon: 'success',
              title: 'Transaction completed successfully',
              text: `Transaction ID: ${transactionId}`,
            }).then(() => {
              navigate('/mycourses');
            });
            axiosSecure
              .delete(`/courses/${payment.courseIdentity}`)
              .then((deleteRes) => {
                if (deleteRes.data.deletedCount === 1) {
                  console.log('Course deleted successfully');
                }
              })
              .catch((error) => {
                console.error('Delete course error:', error);
              });
          }
        })
        .catch((error) => {
          console.error('Payment processing error:', error);
          Swal.fire({
            icon: 'error',
            title: 'An error occurred',
            text: 'Please try again later or contact support for assistance.',
          });
        });
    }
  };

  return (
    <section className="mt-12 ">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="custom-btn"
        >
          Pay
        </button>
      </form>
      {cardError && <p>{cardError.message}</p>}

      {transactionId && (
        <p>
          Transaction completed successfully with transaction ID :{' '}
          {transactionId}
        </p>
      )}
    </section>
  );
};

export default CheckoutForm;
