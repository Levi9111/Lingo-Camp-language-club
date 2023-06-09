import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <div className="md:max-w-[80%] mx-auto">
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
      </div>
      <Contact></Contact>
    </section>
  );
};

export default Home;
