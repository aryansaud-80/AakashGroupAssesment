import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axiosInstance';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post('/', formData);

      console.log(res);

      if (res.status === 200) {
        toast.success('Message Sent Successfully');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className=' flex-1 bg-white p-8 shadow-xl rounded-2xl border border-gray-200 h-fit'>
      <form
        className='grid gap-6 grid-cols-1 md:grid-cols-2'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col max-sm:w-full'>
          <label
            htmlFor='name'
            className='text-sm font-semibold text-gray-700 mb-1'
          >
            Full Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Aryan Saud'
            value={formData.name}
            onChange={handleChange}
            required
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex flex-col max-sm:w-full'>
          <label
            htmlFor='email'
            className='text-sm font-semibold text-gray-700 mb-1'
          >
            Email Address <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='aryan@company.com'
            value={formData.email}
            onChange={handleChange}
            required
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex flex-col max-sm:w-full'>
          <label
            htmlFor='company'
            className='text-sm font-semibold text-gray-700 mb-1'
          >
            Company
          </label>
          <input
            type='text'
            id='company'
            name='company'
            placeholder='Your Company'
            value={formData.company}
            onChange={handleChange}
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex flex-col max-sm:w-full'>
          <label
            htmlFor='subject'
            className='text-sm font-semibold text-gray-700 mb-1'
          >
            Subject <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            placeholder='Project Inquiry'
            value={formData.subject}
            onChange={handleChange}
            required
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex flex-col md:col-span-2 w-full'>
          <label
            htmlFor='message'
            className='text-sm font-semibold text-gray-700 mb-1'
          >
            Message <span className='text-red-500'>*</span>
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Write your message here...'
            required
            value={formData.message}
            onChange={handleChange}
            rows='5'
            className='p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button
          type='submit'
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 justify-center cursor-pointer mt-4 md:col-span-2 ${
            loading ? 'bg-gray-300' : ''
          } `}
          disabled={loading}
        >
          {loading ? (
            'Sending ...'
          ) : (
            <>
              <IoIosSend className='h-6 w-6' />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
