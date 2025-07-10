import { useState, useEffect, useRef } from 'react';
import { BiChevronLeft, BiChevronRight, BiPause, BiPlay } from 'react-icons/bi';
import { BiCode, BiRocket } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa6';
import first from '../assets/saas.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: 'Transform Your Business with Modern SaaS Solutions',
      subtitle:
        'We build scalable, secure, and innovative software that drives growth',
      description:
        'From concept to deployment, we create custom SaaS applications that solve real business problems and deliver exceptional user experiences.',
      cta: 'Start Your Project',
      href: '#contact',
      image: first,

      features: [
        'Cloud-Native Architecture',
        'Scalable Solutions',
        '24/7 Support',
      ],
      icon: BiRocket,
    },
    {
      id: 2,
      title: 'Expert Development Team at Your Service',
      subtitle: 'Full-stack developers, designers, and product strategists',
      description:
        'Our experienced team combines technical expertise with creative vision to deliver products that users love and businesses depend on.',
      cta: 'Meet Our Team',
      image: second,
      href: '#team',
      features: [
        'Full-Stack Expertise',
        'Agile Development',
        'User-Centered Design',
      ],
      icon: FaUsers,
    },
    {
      id: 3,
      title: 'Cutting-Edge Technology Stack',
      subtitle: 'Modern tools and frameworks for superior performance',
      description:
        'We leverage the latest technologies including React, Next.js, Node.js, and cloud platforms to build fast, reliable, and maintainable applications.',
      cta: 'View Technologies',
      image: third,
      href: '#about',
      features: ['React & Next.js', 'Cloud Infrastructure', 'API Development'],
      icon: BiCode,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const slideInterval = useRef(null);

  useEffect(() => {
    if (isAutoSliding) {
      slideInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(slideInterval.current);
  }, [isAutoSliding, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const toggleAutoSlide = () => {
    setIsAutoSliding((prev) => !prev);
  };

  const SlideIcon = slides[currentIndex].icon;

  return (
    <section className='bg-gray-100 relative' id='home'>
      <div className='container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10'>
        <div className='flex-1'>
          <SlideIcon className='text-blue-600 w-12 h-12 mb-4' />
          <h2 className='text-3xl font-bold mb-2'>
            {slides[currentIndex].title}
          </h2>
          <h3 className='text-xl text-gray-700 mb-4'>
            {slides[currentIndex].subtitle}
          </h3>
          <p className='text-gray-600 mb-6'>
            {slides[currentIndex].description}
          </p>

          <div className='mb-8 flex gap-4 flex-wrap'>
            {slides[currentIndex].features.map((feature, i) => (
              <span
                key={i}
                className='bg-blue-100 px-3 py-1 rounded-full text-blue-700'
              >
                {feature}
              </span>
            ))}
          </div>

          <a
            href={slides[currentIndex].href}
            className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition'
          >
            {slides[currentIndex].cta}
          </a>

          <div className='mt-8 flex items-center gap-4 flex-wrap'>
            <button
              onClick={prevSlide}
              aria-label='Previous Slide'
              className='p-2 bg-white rounded-full shadow hover:bg-gray-200 transition'
            >
              <BiChevronLeft className='w-6 h-6' />
            </button>
            <button
              onClick={nextSlide}
              aria-label='Next Slide'
              className='p-2 bg-white rounded-full shadow hover:bg-gray-200 transition'
            >
              <BiChevronRight className='w-6 h-6' />
            </button>
            <button
              onClick={toggleAutoSlide}
              aria-label={
                isAutoSliding ? 'Pause Auto Slide' : 'Start Auto Slide'
              }
              className='ml-auto px-4 py-2 border border-blue-600 rounded text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center gap-2'
            >
              {isAutoSliding ? (
                <BiPause className='w-5 h-5' />
              ) : (
                <BiPlay className='w-5 h-5' />
              )}
              {isAutoSliding ? 'Pause Auto Slide' : 'Start Auto Slide'}
            </button>
          </div>

          <div className='mt-6 flex justify-center space-x-3'>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className='flex-1 flex justify-center'>
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className='max-w-full max-h-[400px] object-contain rounded shadow-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
