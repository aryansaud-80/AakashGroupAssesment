import { useEffect, useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div
        className={`sticky top-0 z-50 transition-all duration-300 flex justify-between items-center p-4 px-10  ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className='flex text-2xl font-bold text-gray-700'>
          <p>
            Aakash
            <span className='text-blue-700'>Labs</span>
          </p>
        </div>

        <div className='gap-10 text-lg hidden sm:flex'>
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className='text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        <div
          className='sm:hidden cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </div>
      </div>

      {open && (
        <div
          className={`fixed top-16 right-0 w-2/4  h-screen shadow flex flex-col gap-5 p-6 transform transition-transform duration-300 z-40 sm:hidden text-lg font-medium ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              onClick={() => setOpen(false)}
              className='text-gray-800 hover:bg-blue-100 p-3 rounded-md'
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
