import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const MoveToTop = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-[10%] right-10 bg-blue-400 text-white animate-bounce flex items-center justify-center w-10 h-10 rounded-full cursor-pointer'
      aria-label='Scroll to top'
    >
      <MdOutlineKeyboardArrowUp className='h-6 w-6' />
    </button>
  );
};
export default MoveToTop;
