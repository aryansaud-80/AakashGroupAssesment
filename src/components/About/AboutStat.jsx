import { BiAward, BiShield } from 'react-icons/bi';
import StatsCard from '../StatsCard';
import { FaUsers } from 'react-icons/fa';
import { IoTrendingUp } from 'react-icons/io5';

const AboutStat = () => {
  const stats = [
    {
      number: '50+',
      label: 'Projects Delivered',
      icon: <IoTrendingUp className='text-blue-700 w-8 h-8' />,
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: <BiAward className='text-blue-700 w-8 h-8' />,
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: <BiShield className='text-blue-700 w-8 h-8' />,
    },
    {
      number: '5+',
      label: 'Years Experience',
      icon: <FaUsers className='text-blue-700 w-8 h-8' />,
    },
  ];
  return (
    <div className='grid grid-cols-2  md:grid-cols-4  gap-6'>
      {stats.map((stat) => (
        <StatsCard
          key={stat.label}
          statTitle={stat.label}
          icon={stat.icon}
          stat={stat.number}
        />
      ))}
    </div>
  );
};
export default AboutStat;
