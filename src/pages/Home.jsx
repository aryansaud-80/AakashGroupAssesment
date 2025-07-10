import AboutUs from '../components/About/AboutUs';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar />
      <AboutUs />
    </div>
  );
};
export default Home;
