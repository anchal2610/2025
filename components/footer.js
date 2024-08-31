import {
      FaFacebook,
      FaTwitter,
      FaInstagram,

      FaLinkedin,
} from "react-icons/fa";
import { CiLocationOn, CiPhone } from 'react-icons/ci'
import { LuPhoneCall, LuMail } from 'react-icons/lu'

export default function Footer() {
      return (
            <div className="w-full  p-10 object-contain overflow-hidden bg-cover bg-[url('../public/footer.jpg')] "
            >

                  <div className="flex md:flex-row flex-col pb-8 justify-center  z-60">
                        <div className="flex flex-col md:mx-20">
                              <h1 className="text-blue-500 tracking-widest text-3xl mb-10">TNW</h1>
                              <p className="text-white w-[300px] text-l mb-4">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                              <h2 className="text-xl text-blue-500">Follow Us</h2>
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
                        <div className="flex flex-col md:mx-20">
                              <h1 className="text-blue-500  text-3xl mb-10">Services</h1>
                              <p className="text-white text-l">Web Design</p>
                              <p className="text-white text-l">App Development</p>
                              <p className="text-white text-l">Cloud Services</p>
                              <p className="text-white text-l">Domain and Hosting</p>
                              <p className="text-white text-l">Seo Optimization</p>
                        </div>
                        <div className="flex flex-col md:mx-20">
                              <h1 className="text-blue-500  text-3xl mb-10">Contacts</h1>

                              <p className="text-white text-l inline-flex mb-2  "><span className="mr-1 text-xl"><CiLocationOn /></span>Vinayak Nagar,Gachibowli,Hyderabad</p>
                              <p className="text-white text-l inline-flex mb-2  "><span className="mr-1 text-xl"><LuPhoneCall /></span>+91 9999999999</p>
                              <p className="text-white text-l inline-flex   "><span className="mr-1 text-xl"><LuMail /></span>thenitrrshworld@xyz.com</p>
                        </div>
                  </div>
            </div>
      )
}