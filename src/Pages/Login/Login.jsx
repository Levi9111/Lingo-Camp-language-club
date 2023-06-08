import { useForm } from 'react-hook-form';
import './Login.css';
import Warning from '../Shared/Warning/Warning';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathName || '/';

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back! You are now logged in.',
          showConfirmButton: true,
          confirmButtonText: 'Continue',
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: `Oops! ${err}`,
          cancelButtonText: 'Ok',
          showCancelButton: false,
        });
      });
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

  return (
    <section className="form-container ">
      <form className="box" onSubmit={handleSubmit(onSubmit)}>
        <h1>login</h1>
        <input
          type="email"
          name="email"
          placeholder="username@email.com"
          {...register('email', { required: 'Email is required' })}
        />
        {/* {errors.email && <p>{errors.email.message}</p>} */}
        {errors.email && <Warning>{errors.email.message}</Warning>}
        <input
          type="password"
          name="password"
          placeholder="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.email && <Warning>{errors.password.message}</Warning>}
        <input type="submit" value="login" />
        <div className="flex flex-col w-full border-opacity-50">
          <p className="text-gray-300">
            New to LingoCamp? <Link to="/register">Register Here</Link>
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

export default Login;
