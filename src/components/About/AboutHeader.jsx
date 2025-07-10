import { BiBulb } from 'react-icons/bi';
import Capsule from '../Capsule';

const AboutHeader = () => {
  return (
    <div className='flex items-center justify-center gap-4 flex-col w-full'>
      <Capsule icon={<BiBulb />} text={'About Aakash Labs'} />
      <h2 className='text-4xl font-bold text-gray-700 text-center'>
        Building the Future of <br />
        <span className='text-blue-700'>SaaS Solutions</span>
      </h2>

      <p className='text-gray-500 text-xl text-center'>
        We're a passionate team of developers, designers, and strategists
        dedicated to <br /> creating innovative SaaS applications that transform
        businesses and delight users.
      </p>
    </div>
  );
};
export default AboutHeader;
