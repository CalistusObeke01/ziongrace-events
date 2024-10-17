// import Video from 'next-video';
import Image from 'next/image'
import Hero from "./components/hero";
import { ourWork } from "./constants/Index";
// import awesomeVideo from 'https://youtu.be/XDqEvmxnLeY';

export default function Home() {
  return (
    // grid grid-rows-[20px_1fr_20px]
    <div>
      <Hero />
      <div className='mb-20 mt-12 md:px-20 px-8'>
      {/* mx-auto max-w-7xl  */}
      {/* style={{margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`}} */}
        <h2 className="text-xl font-bold">Our Work</h2>
        <div className="w-full gap-6 grid md:grid md:grid-cols-3 my-4 ">
          {
            ourWork.map((data, id) => <div key={id} className='shadow-lg'>
              <Image 
                src={data.path}
                width={500}
                height={500}
                alt={data.title}  
                className='hover:scale-110'
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.content}.</p>
              </div>
            </div>)
          }
        </div>
      </div>
      
    </div>
  )
}
