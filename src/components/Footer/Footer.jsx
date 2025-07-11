import { BiMapPin, BiPhone } from 'react-icons/bi';
import { IoMail } from 'react-icons/io5';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/akashlabs' },
  { icon: BsLinkedin, href: 'https://linkedin.com/company/akashlabs' },
  { icon: BsTwitter, href: 'https://twitter.com/akashlabs' },
  { icon: BsInstagram, href: 'https://instagram.com/akashlabs' },
  { icon: BsFacebook, href: 'https://facebook.com/akashlabs' },
];

export default function Footer() {
  return (
    <footer className='bg-gray-100 text-gray-700 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='space-y-4'>
            <a href='#' className='text-2xl font-bold text-gray-700'>
              Aakash<span className='text-blue-700'>Labs</span>
            </a>
            <p className='text-gray-400 text-sm max-w-sm'>
              Building innovative SaaS solutions that transform businesses and
              create exceptional user experiences.
            </p>
            <div className='flex space-x-4 text-white'>
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-gray-800 hover:bg-gray-700 rounded-md'
                >
                  <Icon className='w-4 h-4' />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#team'>Team</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <a href='/api-demo'>API Demo</a>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Contact</h3>
            <div className='flex items-center space-x-2 text-gray-400'>
              <IoMail className='text-blue-400' />
              <span>hello@akashlabs.com</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-400'>
              <BiPhone className='text-blue-400' />
              <span>+977-9801903813</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-400'>
              <BiMapPin className='text-blue-400' />
              <span>Putali Sadak, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-400 pt-6 text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} Aakash Labs. Built with ❤️ in Nepal.
        </div>
      </div>
    </footer>
  );
}
