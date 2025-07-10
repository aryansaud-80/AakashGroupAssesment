import AboutCTA from './AboutCTA';
import AboutFeatures from './AboutFeatures';
import AboutStat from './AboutStat';
import AboutHeader from './AboutHeader';

const AboutUs = () => {
  return (
    <div className='px-4  py-6 flex flex-col gap-10 container m-auto '>
      <AboutHeader />
      <AboutStat />
      <AboutFeatures />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;
