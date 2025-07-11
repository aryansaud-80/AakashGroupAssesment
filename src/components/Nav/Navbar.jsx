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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Api Demo', href: 'anime' },
  ];

  return (
    <>
      <div
        className={`sticky top-0 z-50 transition-all duration-300 flex justify-between items-center  py-4 px-3 lg:px-13  ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <a href='#' className='text-2xl font-bold text-gray-700 cursor'>
          Aakash<span className='text-blue-700'>Labs</span>
        </a>

        <div className='gap-6 text-lg hidden md:flex text-gray-700 font-medium items-center'>
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className=' hover:text-blue-600 transition-colors duration-200  relative group'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
          ))}

          <a
            href='#contact'
            className='bg-blue-500 text-white px-4 py-2 rounded-full'
          >
            Get Started
          </a>
        </div>

        <button
          className='md:hidden cursor-pointer'
          onClick={() => setOpen(!open)}
          aria-label='Toggle navigation menu'
        >
          {open ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-16 right-0 w-2/3 h-screen bg-white shadow-md transform transition-all duration-300 z-40 md:hidden text-lg font-medium flex flex-col gap-5 p-6 text-gray-800 ${
          open
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.name}
            onClick={() => setOpen(false)}
            className=' hover:bg-blue-100 p-3 rounded-md'
          >
            {item.name}
          </a>
        ))}

        <a
          href='#contact'
          className='bg-blue-500 text-white px-4 py-2 rounded-full'
          onClick={() => setOpen(false)}
        >
          Get Started
        </a>
      </div>
    </>
  );
};

export default Navbar;
