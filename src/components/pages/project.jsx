import React from 'react'
import MagicBento from '../../ui/magicbento.jsx'
import TechProjectsBento from '../../ui/techproject.jsx'
import Navbar from '../../ui/nav2bar.jsx';
const project = () => {
  return (
    <div className="overflow-x-hidden containerz">
      <Navbar />
  <div className="text-white containerz mb-1">
    <h1 className='mx-15 text-4xl p-2 pt-5'>Projects</h1>
    <p className='text-1xl text-neutral-500 p-2 mx-15'>Some of the projects are from work and some are on my own time.</p>
  </div>
  <hr className="text-neutral-700 my-7 mx-16 w-11/12" />
   <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={30}
                glowColor="158, 158, 158"  
            />
             <hr className="text-neutral-700 my-7 mx-16 p-5 w-11/12" />
            <TechProjectsBento />
            <div className='h-20'></div>

</div>
  )
}

export default project