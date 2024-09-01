"use client"
import Box from '@mui/joy/Box';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Drawer from '@mui/joy/Drawer';
import { useState } from 'react';
import Link from 'next/link';

export default function MenuBar() {
      const [open, setOpen] = useState(false)

      return (
            <div className="  md:hidden bg-blue-900 ">
                  <Box sx={{ display: 'flex', justifyContent: "end", marginRight: "10px" }} >
                        <button onClick={() => setOpen(true)}>
                              <MenuOpenOutlinedIcon className='font-bold  text-6xl text-white' />
                        </button>
                        <Drawer anchor="right" size="sm" open={open} onClose={() => setOpen(false)}>
                              <CloseOutlinedIcon className='text-bold text-4xl absolute top-0 right-2 ' onClick={() => setOpen(false)} />
                              <Link href="/" className='mx-auto' onClick={() => setOpen(false)}>
                                    <img
                                          src="tnw4white.svg"
                                          className="h-16 w-24   hover:scale-[1.1] "
                                    />
                              </Link>
                              <div className='flex flex-col justify-between items-start py-8 '>
                                    <div className='border-b-2 border-gray-500 w-full my-8'>
                                          <Link href='/' className='text-xl text-start  pl-2' onClick={() => setOpen(false)}>Home</Link>
                                    </div>
                                    <div className='border-b-2 border-gray-500 w-full my-8'>
                                          <Link href='/services' className='text-xl text-start  pl-2' onClick={() => setOpen(false)}>Services</Link>
                                    </div>
                                    <div className='border-b-2 border-gray-500 w-full my-8'>
                                          <Link href='/portfolio' className='text-xl text-start  pl-2' onClick={() => setOpen(false)}>Portfolio</Link>
                                    </div>
                                    <div className='border-b-2 border-gray-500 w-full my-8'>
                                          <Link href='/testimonial' className='text-xl text-start  pl-2' onClick={() => setOpen(false)}>Testimonial</Link>
                                    </div>
                              </div>
                              <h2 className='absolute bottom-[8%] text-xl left-[20%]'>All Rights Reserved</h2>
                        </Drawer>
                  </Box>
            </div>
      );
}