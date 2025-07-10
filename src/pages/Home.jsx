import { Bounce, ToastContainer } from 'react-toastify';
import AboutUs from '../components/About/AboutUs';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Nav/Navbar';
import Team from '../components/Team/Team';
import Footer from '../components/Footer/Footer';
import MoveToTop from '../components/MoveToTop';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <>
      <ToastContainer
        position='bottom-left'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
      <Navbar />
      <div className='flex flex-col gap-10 relative'>
        <HeroSlider />
        <AboutUs />
        <Team />
        <Contact />
        <Footer />
        <MoveToTop />
      </div>
    </>
  );
};
export default Home;
