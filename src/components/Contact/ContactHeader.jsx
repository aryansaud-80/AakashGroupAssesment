import Capsule from '../Capsule';
import { IoIosSend } from 'react-icons/io';

const AboutHeader = () => {
  return (
    <div className='flex items-center justify-center gap-4 flex-col w-full'>
      <Capsule icon={<IoIosSend />} text={'Get In Touch'} />
      <h2 className='text-4xl font-bold text-gray-700 text-center'>
        Ready to Start Your <br />
        <span className='text-blue-700'>Next Project?</span>
      </h2>

      <p className='text-gray-500 text-xl text-center '>
        Let's discuss how we can help bring your vision to life. We're here to
        answer your <br /> questions and provide expert guidance.
      </p>
    </div>
  );
};
export default AboutHeader;
