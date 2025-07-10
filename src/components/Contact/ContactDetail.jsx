import { BiMapPin, BiPhone } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import ContactCard from './ContactCard';
import WhyAakashLab from '../WhyAakashLab';

const ContactDetail = () => {
  const contactInfo = [
    {
      icon: <IoMail />,
      title: 'Email Us',
      details: 'hello@akashlabs.com',
      description: 'Send us an email anytime',
    },
    {
      icon: <BiPhone />,
      title: 'Call Us',
      details: '+977-9801903813',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: <BiMapPin />,
      title: 'Visit Us',
      details: 'Laxmi Plaza, Putali Sadak, Kathmandu, Nepal',
      description: 'Come say hello at our office',
    },
    {
      icon: <BsClock />,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'We respond quickly',
    },
  ];
  return (
    <div className='flex gap-6 flex-col md:w-1/2 w-full'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-4xl md:text-3xl font-bold text-gray-700'>
          Let's Connect
        </h3>
        <p className='text-justify'>
          We're always excited to hear about new projects and opportunities.
          Whether you have a specific idea in mind or just want to explore
          possibilities, we're here to help.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 gap-6 grid-cols-1'>
        {contactInfo.map((info) => {
          return (
            <ContactCard
              key={info.title}
              icon={info.icon}
              details={info.details}
              description={info.description}
              title={info.title}
            />
          );
        })}
      </div>

      <WhyAakashLab />
    </div>
  );
};
export default ContactDetail;
