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
            <Box sx={{ display: 'flex' }}>
                  <button onClick={() => setOpen(true)}>
                        <MenuOpenOutlinedIcon className='text-bold text-4xl text-white' />
                  </button>
                  <Drawer anchor="right" size="sm" open={open} onClose={() => setOpen(false)}>
                        <CloseOutlinedIcon className='text-bold text-4xl absolute right-2' onClick={() => setOpen(false)} />
                        <div className='text-bold text-2xl text-center text-blue-500 pt-1 tracking-widest'>TNW</div>
                        <div className='flex flex-col justify-between items-start py-8 '>
                              <div className='border-b-2 border-gray-500 w-full my-8'>
                                    <Link href='/' className='text-xl text-start  pl-2'>Home</Link>
                              </div>
                              <div className='border-b-2 border-gray-500 w-full my-8'>
                                    <Link href='/' className='text-xl text-start  pl-2'>Services</Link>
                              </div>
                              <div className='border-b-2 border-gray-500 w-full my-8'>
                                    <Link href='/' className='text-xl text-start  pl-2'>Portfolio</Link>
                              </div>
                              <div className='border-b-2 border-gray-500 w-full my-8'>
                                    <Link href='/' className='text-xl text-start  pl-2'>Testimonial</Link>
                              </div>
                        </div>
                        <h2 className='absolute bottom-[8%] text-xl left-[20%]'>All Rights Reserved</h2>
                  </Drawer>
            </Box>
      );
}