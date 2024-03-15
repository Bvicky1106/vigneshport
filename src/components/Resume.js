import AssestsImg from '../Assests/hero.png';

export default function Resume() {
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-primary px-5 py-16 md:py-24'>
      <div className='md:w-1/2'>
        <img className='md:max-w-full rounded-md shadow-lg' src={AssestsImg} alt="Resume" />
      </div>

      <div className='md:w-1/2 flex flex-col justify-center'>
        <div className='text-center md:text-left'>
          <h1 className='text-5xl font-bold text-black mb-6'>Resume</h1>
          <p className='text-black text-lg mb-6'>
            View my resume and see my qualifications.{' '}
            <a href='#' class='px-6 py-3 rounded-full border hover:bg-gray-500 hover:text-white transition duration-300'>
              Download
            </a>



          </p>
        </div>
      </div>
    </section>

  );
}
