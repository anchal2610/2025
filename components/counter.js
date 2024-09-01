"use client"
import CountUp from 'react-countup';
import clientIcon from '../assets/client.png'
import projectIcon from '../assets/projects.png'
import supportIcon from '../assets/tech-support.png'

export default function Counter() {
      return (


            <div className='flex flex-col bg-blue-700 md:flex-row justify-center px-28 py-12 md:py-0 items-center md:h-[300px]  '>

                  <div className='flex md:mx-28 pb-12 justify-center items-center flex-col'>
                        <div style={{ height: "80px", width: "80px" }}>
                              <img alt="gallery" src={clientIcon.src} className=' pl-2  object-contain ' />
                        </div>
                        <CountUp
                              start={100}
                              end={150}
                              duration={2}
                              enableScrollSpy={true}

                        >
                              {({ countUpRef }) => (
                                    <div>
                                          <span className='text-center text-green-500 font-bold text-xl' ref={countUpRef} />

                                    </div>
                              )}
                        </CountUp>
                        <h2 className='text-white text-xl text-center'>Happy Clients</h2>
                  </div>
                  <div className='flex md:mx-28 pb-12 flex-col items-center'>
                        <div style={{ height: "80px", width: "80px" }}>
                              <img alt="gallery" src={projectIcon.src} className='  object-contain ' />
                        </div>
                        <CountUp
                              start={150}
                              end={232}
                              duration={2}
                              enableScrollSpy={true}

                        >
                              {({ countUpRef }) => (
                                    <div>
                                          <span className='text-center text-green-500 font-bold  text-xl' ref={countUpRef} />

                                    </div>
                              )}
                        </CountUp>
                        <h2 className='text-white text-xl text-center'>Projects Delivered</h2>
                  </div>
                  <div className='flex md:mx-28 pb-12  items-center flex-col'>
                        <div style={{ height: "80px", width: "80px" }}>
                              <img alt="gallery" src={supportIcon.src} className=' pl-2 object-contain ' />
                        </div>
                        <CountUp
                              start={150}
                              end={250}
                              duration={2}
                              enableScrollSpy={true}

                        >
                              {({ countUpRef }) => (
                                    <div>
                                          <span className='text-center text-green-500 font-bold  text-xl' ref={countUpRef} />

                                    </div>
                              )}
                        </CountUp>
                        <h2 className='text-white text-xl text-center'>Hours of Support</h2>
                  </div>
            </div>

      )
}