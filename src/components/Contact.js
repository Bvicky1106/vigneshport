import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id='contact' className='flex flex-col md:flex-row bg-second px-5 py-16 justify-center'>


      <div className='md:w-1/2 flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-4xl text-black mb-4'>CONTACT</h1>
          <p className='text-black mb-8'>
            Feel free to reach out! Whether you have questions or just want to say hello,
            you can contact me through various channels.
          </p>

          <div className='flex items-center justify-center space-x-4'>
            <a href='babuvignesh1106@gmail.com' className='contact-link'>
              <FaEnvelope className='text-black text-2xl' />
            </a>
            <a href='tel:+9094119173' className='contact-link'>
              <FaPhone className='text-black text-2xl' />
            </a>
            <a href='https://www.linkedin.com/public-profile/settings' className='contact-link'>
              <FaLinkedin className='text-black text-2xl' />
            </a>
            <a href='https://github.com/yourgithub' className='contact-link'>
              <FaGithub className='text-black text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
