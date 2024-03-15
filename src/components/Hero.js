import HeroImg from '../Assests/hero.png';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Hero(){

const config = {

  subtitle:'Frontend Developer'

}


 return <section id='hero' className='flex  flex-col md:flex-row  px-5 py-32 items-center justify-center bg-second'>
 <div className='w-1/2 text-black text-5xl text-start'>
 <h1 className='text-5xl font-bold mb-4'>Hi, I'm Vignesh.B</h1>
    <p className='text-2xl mb-6'>{config.subtitle}</p>
  <p></p>
    <div className='flex'>
      <a href="https://github.com/Bvicky1106" className='hover:text-white px-4'><FaGithub/></a>
      
      <a href="https://www.linkedin.com/public-profile/settings" className='hover:text-white'><FaLinkedin/></a>
    </div>
 
 </div>

 <img className='md:w-1/3' src={HeroImg} alt="Hero" />
</section>
}
