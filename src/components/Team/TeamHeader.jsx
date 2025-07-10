import { BiBulb } from 'react-icons/bi';
import Capsule from '../Capsule';
import { FaUserAlt } from 'react-icons/fa';

const AboutHeader = () => {
  return (
    <div className='flex items-center justify-center gap-4 flex-col w-full'>
      <Capsule icon={<FaUserAlt />} text={'Our Team'} />
      <h2 className='text-4xl font-bold text-gray-700 text-center'>
        Meet the Experts Behind <br />
        <span className='text-blue-700'>Aakash Labs</span>
      </h2>

      <p className='text-gray-500 text-xl text-center '>
        Our diverse team of talented professionals brings together years of
        experience in <br /> development, design, and product strategy to
        deliver exceptional results.
      </p>
    </div>
  );
};
export default AboutHeader;
