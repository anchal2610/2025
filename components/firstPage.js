import AnimateOnScroll from "@/utilities/scrollAnimation";
import AnimateRightOnScroll from "@/utilities/scrollAnimationRight";
import {
      FaFacebook,
      FaTwitter,
      FaInstagram,

      FaLinkedin,
} from "react-icons/fa";
import MenuBar from "./menuBar";




export default function FirstPage() {
      return (
            <div className="w-full -mt-[3em] object-contain overflow-hidden md:mb-12 ">
                  <img
                        src="/bg-main.png"
                        alt="main bg"
                        className="w-full  object-cover md:object-fill min-h-screen md:max-h-screen   opacity-95 "


                  />
                  <div className="block md:hidden absolute top-0 right-2 ">
                        <MenuBar />
                  </div>
                  <div className="flex flex-col  items-start justify-between  md:w-1/2 absolute top-1/3 left-5 md:top-[55%] md:left-[5%] z-60">

                        <AnimateRightOnScroll>
                              <div className=" text-[1.4rem] font-bold  text-white md:text-3xl ">
                                    <h1 className="hidden md:block">  DELIVERING SUPERIOR SERVICES</h1>

                                    <h1 className="block md:hidden">DELIVERING</h1>
                                    <h2 className="block md:hidden">SUPERIOR SERVICES</h2>
                                    <span className="text-blue-500 ">
                                          IT SOLUTIONS
                                    </span>
                              </div>
                        </AnimateRightOnScroll>


                        <AnimateOnScroll>
                              <button className="hover:bg-white px-[1em] py-[.5em] rounded-full mt-[3em]  text-white hover:text-gray-600  text-xl outline-none bg-blue-500 hover:scale-[1.1] duration-200 hover:border-blue-700 hover:border-2">Get Started</button>
                        </AnimateOnScroll>

                        <div className="flex items-center justify-center   md:justify-start mt-2">
                              <a
                                    href="https://www.facebook.com/YourPage"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-4 hover:scale-[1.3]"
                              >
                                    <FaFacebook size={24} color="#1877F2" />
                              </a>
                              <a
                                    href="https://www.instagram.com/onlinetravelpedia"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-4 hover:scale-[1.3]"
                              >
                                    <FaLinkedin size={24} color="#1877F2" />
                              </a>
                              <a
                                    href="https://twitter.com/YourPage"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-4 hover:scale-[1.3] "
                              >
                                    <FaTwitter size={24} color="#1DA1F2" />
                              </a>
                              <a
                                    href="https://www.instagram.com/onlinetravelpedia"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:scale-[1.3]"
                              >
                                    <FaInstagram size={24} color="#E1306C" />
                              </a>
                        </div>

                  </div>
            </div>
      )
}