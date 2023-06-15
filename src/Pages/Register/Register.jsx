import { useForm } from 'react-hook-form';
import './Register.css';
import Warning from '../Shared/Warning/Warning';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [passwordType, setPasswordType] = useState(false);
  const handlePassWordType = () => {
    setPasswordType(!passwordType);
  };

  const { createUser, googleLogin, updateUser, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathName || '/';

  const onSubmit = (data) => {
    console.log(data);

    // Handle form submission with email and password
    const { email, password, name, photoURL: photo } = data;
    createUser(email, password, name, photo)
      .then((res) => {
        const user = res.user;
        // console.log(user);

        updateUser(name, photo).then(() => {
          const savedUser = { name, email };
          fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  icon: 'success',
                  title: 'Sign-up Successful',
                  text: 'Congratulations! Welcome to LingoCamp. Please login to your account.',
                  showConfirmButton: true,
                });
                navigate('/');
                logOut().then();
              }
            });
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: `Oops! ${err}`,
          cancelButtonText: 'Close',
          showCancelButton: true,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((response) => {
        const user = response.user;
        console.log(user);
        navigate(from, { replace: true });
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
          type={passwordType ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            validate: validatePassword,
          })}
        />
        {errors.password && <Warning>{errors.password.message}</Warning>}

        <input
          type={passwordType ? 'text' : 'password'}
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
        <p
          className="text-white underline cursor-pointer"
          onClick={handlePassWordType}
        >
          {passwordType ? 'Hide Password' : 'Show Password'}{' '}
        </p>
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
