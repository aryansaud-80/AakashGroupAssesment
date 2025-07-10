import AboutUs from '../components/About/AboutUs';
import Navbar from '../components/Nav/Navbar';
import Team from '../components/Team/Team';

const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar />
      <AboutUs />
      <Team />
    </div>
  );
};
export default Home;
