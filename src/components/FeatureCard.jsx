const FeatureCard = ({ icon, label, detail, classname }) => {
  return (
    <div className='bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full group '>
      <div
        className={`inline-flex p-3 rounded-xl mb-6 border ${classname} group-hover:scale-110 transition-transform duration-200`}
      >
        {icon}
      </div>
      <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
        {label}
      </h3>
      <p className='text-gray-600 leading-relaxed'>{detail}</p>
    </div>
  );
};
export default FeatureCard;
