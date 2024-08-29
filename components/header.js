

import Link from "next/link";



export default function Header() {

      return (
            <>

                  <header className=" hidden md:block  md:sticky top-0 z-50  opacity-1 overflow-hidden ">

                        <div className=" flex md:flex-row   mt-2 items-center  justify-between mx-8 ">
                              <button className="px-[1em] py-[.5em] rounded-full  text-2xl text-white ml-6">Logo</button>
                              <nav className=" flex flex-row mt-2 items-center justify-center  ">
                                    <Link href='/'
                                          className="text-white mx-4 text-xl">
                                          Home
                                    </Link>
                                    <Link href='/' className="text-white mx-4 text-xl">
                                          Services
                                    </Link>
                                    <Link href='/' className="text-white mx-4 text-xl">
                                          Portfolio
                                    </Link>
                                    <Link href='/' className="text-white mx-4 text-xl">
                                          Testimonial
                                    </Link>
                                    <Link href='/' className="text-white mx-4 text-xl">
                                          Team
                                    </Link>
                                    <Link href='/' className="text-white mx-4 text-xl">
                                          News
                                    </Link>

                              </nav>
                        </div>
                  </header>
            </>
      );
}
