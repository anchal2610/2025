import AnimateLeftOnScroll from '@/utilities/scrollAnimationLeft'
import AnimateRightOnScroll from '@/utilities/scrollAnimationRight'
import formBg from '../assets/form-bg.png'

export default function FifthPage() {
      return (
            <main className="bg-white w-full min-h-screen overflow-hidden ">
                  <h2 className="md:text-[1.875rem] text-2xl text-center  text-blue-500 mt-[2em] mb-[2.5em]">Contact Us</h2>
                  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-16 md:mx-28 mx-12 ">

                        <AnimateLeftOnScroll>
                              <div className='md:w-[70%] w-[80%] -mt-[2em] '>
                                    <img src={formBg.src} className="object-cover" />
                              </div>
                        </AnimateLeftOnScroll>
                        <AnimateRightOnScroll>

                              <form className="space-y-4">
                                    <div className='flex flex-col md:flex-row  md:relative gap-4 md:mb-20 justify-between items-center  '>


                                          <input
                                                type="text"
                                                id="name"
                                                name="name"

                                                className="mt-1 p-4  md:absolute left-0 top-0 w-full md:w-[45%]   bg-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Your Name"
                                                required
                                          />



                                          <input
                                                type="email"
                                                id="email"
                                                name="email"

                                                className="mt-1 p-4 md:absolute right-0 top-0 w-full  md:w-[45%]     bg-gray-100  rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Your Email"
                                                required
                                          />

                                    </div>


                                    <input
                                          type="text"
                                          id="subject"
                                          name="subject"

                                          className="mt-1 p-4 block w-full bg-gray-100   rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                          placeholder="Subject"
                                          required
                                    />



                                    <textarea
                                          id="message"
                                          name="message"

                                          className="mt-1 p-4 w-full bg-gray-100  rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
                                          placeholder="Write Your Message"
                                          required
                                    />

                                    <button
                                          type="submit"
                                          className=" bg-blue-700 hover:bg-blue-600 text-white  px-[2em] py-[0.8em] text-lg rounded-full transition duration-300 ease-in-out"
                                    >
                                          Send Message
                                    </button>
                              </form>

                        </AnimateRightOnScroll>
                  </div>
            </main>
      )
}