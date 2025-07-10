import { BiAward, BiGlobe, BiShield } from 'react-icons/bi';
import FeatureCard from '../FeatureCard';
import { FaCode, FaUsers } from 'react-icons/fa';
import { GoZap } from 'react-icons/go';

const AboutFeatures = () => {
  const features = [
    {
      icon: <FaCode className='text-blue-600 w-8 h-8' />,
      title: 'Modern Development',
      description:
        'Cutting-edge technologies and best practices for scalable, maintainable solutions.',
      className: 'bg-blue-100  border-blue-200',
    },
    {
      icon: <BiShield className='text-green-600 w-8 h-8' />,
      title: 'Security First',
      description:
        'Enterprise-grade security measures to protect your data and users.',
      className: 'bg-green-100 border-green-200',
    },
    {
      icon: <BiGlobe className='text-purple-600 w-8 h-8' />,
      title: 'Global Scale',
      description:
        'Cloud-native architecture designed to scale globally from day one.',
      className: 'bg-purple-100 border-purple-200',
    },
    {
      icon: <GoZap className='text-yellow-600 w-8 h-8' />,
      title: 'Lightning Fast',
      description:
        'Optimized performance and lightning-fast load times for better user experience.',
      className: 'bg-yellow-100 border-yellow-200',
    },
    {
      icon: <FaUsers className='text-pink-600 w-8 h-8' />,
      title: 'User-Centered',
      description:
        "Intuitive interfaces designed with your users' needs and behaviors in mind.",
      className: 'bg-pink-100 border-pink-200',
    },
    {
      icon: <BiAward className='text-indigo-600 w-8 h-8' />,
      title: 'Quality Assured',
      description:
        'Rigorous testing and quality assurance processes ensure reliable software.',
      className: 'bg-indigo-100 border-indigo-200',
    },
  ];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {features.map((feat) => {
        return (
          <FeatureCard
            key={feat.title}
            icon={feat.icon}
            label={feat.title}
            detail={feat.description}
            classname={feat.className}
          />
        );
      })}
    </div>
  );
};
export default AboutFeatures;
