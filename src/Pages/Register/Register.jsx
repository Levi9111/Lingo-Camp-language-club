import { useForm } from 'react-hook-form';
import './Register.css';
import Warning from '../Shared/Warning/Warning';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { createUser, googleLogin } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
    const { email, password, name, photoURL: photo } = data;
    createUser(email, password, name, photo)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((response) => {
        const user = response.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain at least one capital letter';
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return 'Password must contain at least one special character (!@#$%^&*)';
    }
    return true;
  };

  return (
    <section className="register-container">
      <form className="box" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <Warning>{errors.name.message}</Warning>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <Warning>{errors.email.message}</Warning>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            validate: validatePassword,
          })}
        />
        {errors.password && <Warning>{errors.password.message}</Warning>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && (
          <Warning>{errors.confirmPassword.message}</Warning>
        )}

        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL"
          {...register('photoURL')}
        />
        <input type="submit" value="Register" />
        <div className="flex flex-col w-full border-opacity-50">
          <p className="text-gray-300">
            Already have an account? <Link to="/login">Login to LingoCamp</Link>
          </p>
          <div className="divider">OR</div>
        </div>
        <p className="text-gray-300"> Login with Google</p>
        <button className="google-button" onClick={() => handleGoogleLogin()}>
          <FaGoogle className="google-icon" />
        </button>
      </form>
    </section>
  );
};

export default Register;
