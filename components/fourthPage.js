import { testimonial } from "@/data/data";
import AnimateOnScroll from "@/utilities/scrollAnimation";
import AnimateLeftOnScroll from "@/utilities/scrollAnimationLeft";
import Counter from "./counter";


export default function FourthPage() {
      return (
            <main className="bg-white w-full min-h-screen ">
                  <AnimateLeftOnScroll>
                        <h2 className="md:text-[1.875rem] text-2xl text-center  text-blue-500 mb-[2em]">Testimonial</h2>
                  </AnimateLeftOnScroll>
                  <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2 gap-6 md:mx-28 mt-20  md:mt-28 md:mb-16 ">
                        {testimonial.slice(0, 3).map((data, index) => (
                              <AnimateOnScroll>
                                    <div className=" p-4 w-[80%] md:w-[90%] h-[100%] border-2 border-yellow-500  shadow-lg mx-auto justify-center items-center mb-4  rounded-xl hover:bg-gray-200 hover:scale-[1.1] duration-200 " key={index}>
                                          <div className="flex flex-row justify-start mb-[1em] ">
                                                <div style={{ height: "80px", width: "80px" }}>
                                                      <img alt="gallery" src={data.image.src} className='  object-contain ' />
                                                </div>
                                                <div className="flex flex-col ml-2">
                                                      <h1 className="text-bold text-2xl text-blue-500 text-center pt-1">{data.name}</h1>
                                                      <h2 className="text-bold text-l text-gray-500  ">{data.designation}</h2>
                                                      <h3>⭐⭐⭐⭐⭐</h3>
                                                </div>
                                          </div>
                                          <p className=" text-center text-[0.9rem] pt-2"><span className="text-2xl text-blue-500">❝</span>{data.review}<span className="text-2xl text-blue-500">❞</span></p>
                                    </div>
                              </AnimateOnScroll>
                        ))}
                  </div>

                  <Counter />


            </main>
      )
}