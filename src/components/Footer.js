import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <section id='footer' className="bg-primary text-black text-center py-4">
      <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      <p>
        Made with <FaHeart className="text-red-500 inline-block" /> by{' '}
        <a href="#" >
          Your Name
        </a>
      </p>
    </section>
  );
}
