const ContactCard = ({ icon, className, details, title, description }) => {
  return (
    <div className='bg-gray-50 border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300  group  hover:bg-blue-100'>
      <div
        className={`inline-flex p-3 rounded-xl mb-6 border bg-blue-100 border-blue-200 text-blue-600 group-hover:scale-110 transition-transform duration-200`}
      >
        {icon}
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-xl font-bold'>{title}</span>
        <span className='font-semibold text-blue-700 mb-4'>{details}</span>
        <span className='text-gray-400 text-sm'>{description}</span>
      </div>
    </div>
  );
};
export default ContactCard;
