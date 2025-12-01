import React from 'react'
import MagicBento from '../../ui/animations/magicbento.jsx'
import TechProjectsBento from '../../ui/animations/techproject.jsx'
import Navbar from '../../ui/nav2bar.jsx';
import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';

const project = () => {
  return (
     <div style={{ minHeight: '100vh', position: 'relative' }}>
            <MovingParticleBackground
                particleCount={50}
                glowColor={'200, 200, 200'}
            />
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
   <div className="absolute bottom-8 left-8">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center cursor-pointer">
                    <span className="text-pink-500 text-xl">🦄</span>
                </div>
            </div>
</div>
  )
}

export default project