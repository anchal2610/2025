import { data1, data2 } from "@/data/data"
import AnimateOnScroll from "@/utilities/scrollAnimation"
import AnimateLeftOnScroll from "@/utilities/scrollAnimationLeft"
import AnimateRightOnScroll from "@/utilities/scrollAnimationRight"

export default function ThirdPage() {
      return (
            <main className="min-h-screen bg-white overflow-hidden">
                  <h2 className="md:text-[1.875rem] text-2xl text-center  text-blue-500 mb-[2em]">Why Choose Us</h2>
                  <div className="flex md:flex-row flex-col mx-12 md:mx-24 pt-[3em]">
                        <div className="flex flex-col w-full ">

                              {data1.map((data, index) => (
                                    <div key={index}>
                                          <AnimateLeftOnScroll>
                                                <div className="flex flex-row mb-8  ">
                                                      <div className="text-end mr-6">
                                                            <h2 className="text-bold text-blue-500 text-2xl">{data.title}</h2>
                                                            <p className="text-semibold text-l">{data.description}</p>
                                                      </div>
                                                      <img src={data.image.src} className='w-[60px] object-contain ' />
                                                </div>
                                          </AnimateLeftOnScroll>
                                    </div>
                              ))}

                        </div>
                        <img src="./bg-3.png" className="md:w-[300px] md:h-[300px]  object-contain md:mb-0 mb-6 mx-auto md:mx-12" />

                        <div className="flex flex-col w-full ">
                              {data2.map((data, index) => (
                                    <div key={index}>
                                          <AnimateRightOnScroll>
                                                <div className="flex flex-row mb-8 ">
                                                      <img src={data.image.src} className=' w-[60px] object-contain ' />
                                                      <div className=" ml-6">
                                                            <h2 className="text-bold text-blue-500 text-2xl">{data.title}</h2>
                                                            <p className="text-semibold text-l">{data.description}</p>
                                                      </div>

                                                </div>
                                          </AnimateRightOnScroll>
                                    </div>
                              ))}

                        </div>

                  </div>
            </main>
      )
}