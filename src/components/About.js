import AssestsImg from '../Assests/hero.png';

export default function About() {

  const config = {
    line1: 'A frontend developer is a professional responsible for building and maintaining the user interface',
    line2: ' and user experience (UX) of a website or web application. They work on the client side of the ',
    line3: 'application, dealing with everything that users  with directly.'
  }

  return (
    <section id='about' className='flex flex-col md:flex-row bg-primary px-5 py-16 md:py-24'>
  <div className='md:w-1/2'>
    <img className='md:max-w-full rounded-md shadow-lg' src={AssestsImg} alt="About" />
  </div>

  <div className='md:w-1/2 flex flex-col justify-center'>
    <div className='text-center md:text-left'>
      <h1 className='text-5xl font-bold text-black mb-6'>About</h1>
      <p className='text-lg text-white-300 mb-4'>{config.line1}</p>
      <p className='text-lg text-white-300 mb-4'>{config.line2}</p>
      <p className='text-lg text-white-300'>{config.line3}</p>
    </div>
  </div>
</section>

  );
}
