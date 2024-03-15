import WebImg1 from '../Assests/webImg1.jpg';
import WebImg2 from '../Assests/webImg2.jpg';
import WebImg3 from '../Assests/webImg3.jpg';

export default function Projects() {

    const config = {
        Projects: [
            {
                image: WebImg1,
                description: 'project decription',
                link: ''
            },
            {
                image: WebImg2,
                description: 'project decription',
                link: ''
            },
            {
                image: WebImg3,
                description: 'project decription',
                link: ''
            },
        ]
    }



    return (
        <section id='projects' className="flex flex-col px-5 py-20  justify-center bg-second">

            <div className="w-full">
                <div className=" flex justify-center">
                <h1 className='text-5xl font-bold text-black mb-6'>Projects</h1>
                </div>

            </div>
            <br></br>
            <br></br>

            <div className="w-full ">
                <div className='flex flex-col md:flex-row px-5 px-5 gap-5 justify-center'>
                    {config.Projects.map((project) => (
                        <div className='relative'>
                            <img className='h-[300px] w-[500px]' src={project.image} />
                            <div className='project-desc'>
                                <p className='text-center py-5'>{project.description} </p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>


        </section>
    );

}