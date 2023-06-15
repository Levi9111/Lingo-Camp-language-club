import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer  className='overflow-hidden'>
      <section className="flex flex-col md:flex-row items-start justify-between p-10 bg-base-200 text-base-content">
        <div className="md:w-1/2 mb-10">
          <span className="footer-title">ABOUT LingoCamp</span>
          <p style={{ lineHeight: '24px' }} className="text-lg text-gray-500">
            Discover the Language Adventure at LingoCamp! We&apos;re a leading
            language school specializing in immersive summer camps for students
            of all ages. Our carefully crafted programs combine language
            learning with exciting activities, cultural experiences, and outdoor
            adventures. From exploring vibrant cities to engaging in interactive
            lessons, LingoCamp offers a unique and enriching language journey.
            Join us this summer and unlock the world of languages while creating
            unforgettable memories. Start your linguistic exploration with
            LingoCamp today!
          </p>
        </div>
        <div className="mb-10">
          <span className="footer-title">Links</span>
          <ul className="space-y-5 text-lg ">
            <li className="link link-hover">
              <Link to="/">Home</Link>
            </li>
            <li className="link link-hover">
              <Link to="/instructors">Instructors</Link>
            </li>
            <li className="link link-hover">
              <Link to="/classes">Classes</Link>
            </li>
            <li className="link link-hover">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="link link-hover">
              <Link to="/image">Image</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="footer-title">Subscribe</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">
                Subscribe to our weekly newsletter.
              </span>
            </label>
            <form>
              <input
                className="newsletter-input newsletter-input-email"
                type="email"
                placeholder="email@provider.com"
              />
              <input
                className="newsletter-submit2"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            LingoCamp.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
