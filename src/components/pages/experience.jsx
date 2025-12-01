import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';
import Navbar from '../../ui/nav2bar.jsx';
import Card2 from '../../ui/card2.jsx';

function Experience() {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }} >
            <MovingParticleBackground
                particleCount={50}
                glowColor={'200, 200, 200'}
            />
            
            <Navbar />
            <div className="text-white containerz mb-1">
    <h1 className='mx-15 text-4xl p-2 pt-5'>Experience</h1>
    <p className='text-1xl text-neutral-500 p-2 mx-15'>A blend of professional duty and personal passion.</p>
  </div>
  <hr className="text-neutral-700 my-7 mx-16 w-11/12" />

            <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-20 gap-20">
                <div className="self-start md:ml-20">
                    <Card2 />
                </div>
                <div className="self-end md:mr-20 -mt-20">
                    <Card2 />
                </div>
                <div className="self-end md:mr-150 -mt-20">
                    <Card2 />
                </div>
                <div className="self-end md:mr-20 -mt-20">
                    <Card2 />
                </div>
            </div>

            <div className="absolute bottom-8 left-8">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center cursor-pointer">
                    <span className="text-pink-500 text-xl">🦄</span>
                </div>
            </div>
        </div>
    );
}

export default Experience;