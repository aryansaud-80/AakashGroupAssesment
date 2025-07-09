import { BiBulb } from 'react-icons/bi';

const Capsule = ({ icon, text }) => {
  return (
    <div className='flex gap-2   items-center bg-blue-200 px-4 py-1 rounded-full self-start text-blue-600'>
      <div>{icon || <BiBulb />}</div>
      <p>{text || 'About Aakash Labs'}</p>
    </div>
  );
};
export default Capsule;
