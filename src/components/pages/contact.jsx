import Card from '../../ui/card.jsx'
import React from 'react'
import Navbar from '../../ui/nav2bar.jsx'
import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';

const contact = () => {
  return (
     <div style={{ minHeight: '100vh', position: 'relative' }}>
            <MovingParticleBackground
                particleCount={50}
                glowColor={'200, 200, 200'}
            />
    <div className='flex-row flex-wrap justify-center gap-4 '>
        <Navbar />
        <div className="text-white containerz mb-1">
    <h1 className='mx-15 text-4xl p-2 pt-5'>Contact</h1>
    <p className='text-1xl text-neutral-500 p-2 mx-15'>The conversation starts here. Connect with me.</p>
  </div>
  <hr className="text-neutral-700 my-7 mx-16 w-11/12" />
        <Card title="" />
    </div>
       <div className="absolute bottom-8 left-8">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center cursor-pointer">
                    <span className="text-pink-500 text-xl">🦄</span>
                </div>
            </div>
    </div>
  )
}

export default contact