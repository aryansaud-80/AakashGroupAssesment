import { Bounce, ToastContainer } from 'react-toastify';
import AboutUs from '../components/About/AboutUs';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Nav/Navbar';
import Team from '../components/Team/Team';
import Footer from '../components/Footer/Footer';

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
      <div className='flex flex-col gap-10'>
        <Navbar />
        <AboutUs />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default Home;
