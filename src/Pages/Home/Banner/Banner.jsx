import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';
import img1 from '../../../assets/bannerImg/img1.jpg';
import img2 from '../../../assets/bannerImg/img2.jpg';
import img3 from '../../../assets/bannerImg/img3.jpg';
import img4 from '../../../assets/bannerImg/img4.jpg';
import img5 from '../../../assets/bannerImg/img5.jpg';

const Banner = () => {
  return (
    <section>
      <Carousel infiniteLoop={true}>
        <div className=" ">
          <div className="">
            <img src={img1} className="relative" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-800">
            <h3 className="text-center text-3xl mb-3">
              Unlock the World with LimboClub Summer Language Camps
            </h3>
            <p className="text-center text-xl">
              Immerse yourself in a transformative language learning experience
              at LimboClub. Our summer camps offer an exciting opportunity for
              students to explore foreign languages, connecting cultures and
              unlocking a world of possibilities.
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="">
            <img src={img2} className="relative" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-800">
            <h3 className="text-center text-3xl mb-3">
              Expand Your Horizons at LimboClub Language Camps"
            </h3>
            <p className="text-center text-xl">
              Join us at LimboClub and embark on a linguistic adventure that
              will broaden your horizons. Our immersive language camps provide a
              supportive and engaging environment where students can develop
              their language skills and embrace multiculturalism.
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="">
            <img src={img3} className="relative" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-800">
            <h3 className="text-center text-3xl mb-3">
              Learn Languages, Make Memories at LimboClub{' '}
            </h3>
            <p className="text-center text-xl">
              Make your summer unforgettable by joining LimboClubs language
              camps. From interactive lessons to cultural activities, our
              programs offer a dynamic and fun-filled learning experience,
              fostering friendships and creating lifelong memories.
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="">
            <img src={img4} className="relative" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-800">
            <h3 className="text-center text-3xl mb-3">
              Experience the Joy of Language Learning at LimboClub
            </h3>
            <p className="text-center text-xl">
              Discover the joy of learning a new language at LimboClub. Our
              expert instructors and interactive curriculum make language
              acquisition enjoyable and effective. Join us this summer and
              embark on a journey of linguistic growth and personal development.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="">
            <img src={img5} className="relative" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-800">
            <h3 className="text-center text-3xl mb-3">
              Ignite Your Passion for Languages at LimboClub
            </h3>
            <p className="text-center text-xl">
              Fuel your passion for languages at LimboClubs summer camps.
              Whether you're a beginner or an advanced learner, our tailored
              programs cater to students of all levels, helping them build
              fluency, cultural understanding, and a lifelong love for
              languages.
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
