import TeamCard from './TeamCard';
import TeamHeader from './TeamHeader';

const Team = () => {
  return (
    <section className='bg-gray-100' id='team'>
      <div className='px-4 py-6 flex flex-col gap-10 container m-auto'>
        <TeamHeader />
        <TeamCard />
      </div>
    </section>
  );
};
export default Team;
