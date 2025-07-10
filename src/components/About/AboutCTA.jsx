const AboutCTA = () => {
  return (
    <div className='bg-blue-600 rounded-2xl flex flex-col text-white items-center justify-center gap-6 py-3 px-4 h-[300px] text-center'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Ready to Transform Your Business?
      </h2>
      <p className='text-lg  md:w-1/2'>
        Let's discuss how we can help you build the perfect SaaS solution for
        your needs.
      </p>

      <a
        href='#contact'
        className='cursor-pointer bg-white rounded-full px-8 py-3 shadow-lg text-blue-600 hover:shadow-xl hover:scale-110 transition-all duration-200 font-semibold'
      >
        Start Your Project Today
      </a>
    </div>
  );
};
export default AboutCTA;
