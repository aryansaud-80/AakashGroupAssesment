import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-slate-100 text-center px-4'>
      <h1 className='text-6xl font-bold text-slate-800 mb-4'>404</h1>
      <p className='text-xl text-slate-600 mb-6'>Oops! Page not found.</p>
      <Link
        to='/'
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex gap-2 items-center'
      >
        <BsArrowLeft />
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
