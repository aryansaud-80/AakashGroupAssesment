import { FaGithubAlt, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const SOCIAL_ICONS = {
  github: FaGithubAlt,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  mail: IoMdMail,
};

const UserCard = ({ img, name, role, bio, skills, social }) => {
  return (
    <div className='bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 ease-linear flex flex-col items-center text-center gap-4 py-4 px-2 rounded-xl'>
      <div className='bg-gray-300 w-28 h-28 rounded-md overflow-hidden hover:scale-105 transition-transform'>
        <img src={img} alt={name} className='w-full h-full object-cover' />
      </div>

      <div>
        <p className='text-gray-700 font-semibold text-xl'>{name}</p>
        <span className='text-blue-700 font-bold'>{role}</span>
      </div>

      <div className='text-sm md:text-md text-gray-400 px-4'>{bio}</div>

      <div className='flex flex-wrap items-center gap-2 justify-center'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='bg-blue-100 px-3 py-1 rounded-full text-blue-700 text-sm'
          >
            {skill}
          </div>
        ))}
      </div>

      <div className='flex gap-3 items-center'>
        {Object.entries(social).map(([key, value]) => {
          const Icon = SOCIAL_ICONS[key];
          if (!Icon || !value) return null;

          const href = key === 'mail' ? `mailto:${value}` : value;

          return (
            <div
              className=' bg-gray-100 h-8 w-8 rounded-full px-2 py-1 flex items-center'
              key={key}
            >
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-600 transition-colors '
              >
                <Icon className='w-4 h-4' />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserCard;
