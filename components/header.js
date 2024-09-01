

import Link from "next/link";
import MenuBar from "./menuBar";




export default function Header() {

      return (
            <>

                  <MenuBar />


                  <header className=" hidden md:block  bg-blue-900 md:sticky top-0 z-50  opacity-1 overflow-hidden ">


                        <div className=" flex md:flex-row   mt-2 items-center  justify-between mx-12 ">


                              <Link href="/">
                                    <img
                                          src="tnw4white.svg"
                                          className="h-16 w-24   hover:scale-[1.1] "
                                    />
                              </Link>

                              <nav className=" flex flex-row mt-1 items-center justify-center  ">
                                    <Link href='/'
                                          className="text-white mx-4 text-xl">
                                          Home
                                    </Link>
                                    <Link href='/services' className="text-white mx-4 text-xl">
                                          Services
                                    </Link>
                                    <Link href='/portfolio' className="text-white mx-4 text-xl">
                                          Portfolio
                                    </Link>
                                    <Link href='/testimonial' className="text-white mx-4 text-xl">
                                          Testimonial
                                    </Link>
                                    <Link href='/team' className="text-white mx-4 text-xl">
                                          Team
                                    </Link>
                                    <Link href='/news' className="text-white mx-4 text-xl">
                                          News
                                    </Link>

                              </nav>
                        </div>
                  </header>
            </>
      );
}
