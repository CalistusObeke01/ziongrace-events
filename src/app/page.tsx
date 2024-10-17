// import Video from 'next-video';
import Hero from "./components/hero";
import { ourWork } from "./constants/Index";
// import awesomeVideo from 'https://youtu.be/XDqEvmxnLeY';

export default function Home() {
  return (
    // grid grid-rows-[20px_1fr_20px]
    <div>
      <Hero />
      <div  style={{margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`}}>
        <h2 className="text-xl font-bold">Our Work</h2>
        <div className="w-full gap-6 grid md:grid md:grid-cols-3 my-4 ">
          {
            ourWork.map((data, id) => <div key={id} className='shadow-lg'>
            {/* <Video  poster={data.path}/> */}
            {/* <video width="320" height="240" controls>
              <source src="https://youtu.be/XDqEvmxnLeY" type="video/mp4">
              <source src="https://youtu.be/XDqEvmxnLeY" type="video/ogg">
              Your browser does not support the video tag.
            </video> */}
              <p>{data.chart_pattern}</p>
            </div>)
          }
        </div>
      </div>
      
    </div>
  )
}
