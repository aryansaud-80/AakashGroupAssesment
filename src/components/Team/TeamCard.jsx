import UserCard from '../UserCard';
import aryanImg from '../../assets/aryan.jpeg';
import safalImg from '../../assets/safal.jpeg';
import yogeshImg from '../../assets/yogesh.jpeg';
import pratikshaImg from '../../assets/pratiksha.jpeg';

const TeamCard = () => {
  const teamMembers = [
    {
      name: 'Safal Shyangwa',
      role: 'Founder & Lead Developer',
      image: safalImg,
      bio: 'Full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies.',
      skills: ['React', 'Node.js', 'AWS'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        mail: 'work.aryansaud@gmail.com',
      },
    },

    {
      name: 'Yogesh Shah',
      role: 'UI/UX Designer',
      image: yogeshImg,
      bio: 'Creative designer from Pokhara crafting user-friendly interfaces with Figma and design systems.',
      skills: ['Figma', 'Design Systems', 'User Research'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        mail: 'work.aryansaud@gmail.com',
      },
    },
    {
      name: 'Pratiksha Thapa',
      role: 'Backend Developer',
      image: pratikshaImg,
      bio: 'Specialist in scalable backend APIs using Node.js and PostgreSQL. Passionate about clean architecture.',
      skills: ['Node.js', 'PostgreSQL', 'Docker'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        mail: 'work.aryansaud@gmail.com',
      },
    },

    {
      name: 'Aryan Saud',
      role: 'Frontend Intern',
      image: aryanImg,
      bio: 'Passionate frontend developer currently interning at Aakash Labs, focused on React and UI excellence.',
      skills: ['React', 'Tailwind CSS', 'JavaScript'],
      social: {
        github: 'https://github.com/aryansaud-80',
        linkedin: 'https://linkedin.com/in/aryan-saud-81a618293',
        twitter: '#',
        mail: 'work.aryansaud@gmail.com',
      },
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {teamMembers.map((member) => {
        return (
          <UserCard
            key={member.name}
            img={member.image}
            name={member.name}
            role={member.role}
            bio={member.bio}
            skills={member.skills}
            social={member.social}
          />
        );
      })}
    </div>
  );
};
export default TeamCard;
