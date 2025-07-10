import ContactDetail from './ContactDetail';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

const Contact = () => {
  return (
    <section
      className='px-4  py-6 flex flex-col gap-10 container m-auto '
      id='contact'
    >
      <ContactHeader />
      <div className='flex gap-10 flex-col md:flex-row'>
        <ContactDetail />
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
