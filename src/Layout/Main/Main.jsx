import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <section>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
