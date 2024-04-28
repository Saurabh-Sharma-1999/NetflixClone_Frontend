import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

export default function VideoTitle({title, overview}) {
  return (
    <div className='w-[vw] absolute text-white pt-[18%] p-12 hidden md:block'>
        <h1 className='text-3xl lg:text-4xl font-bold'>{title}</h1>
        <p className='w-full mt-4 lg:w-1/2 lg:mt-4'>{overview}</p>
        <div className='flex mt-8'>
            <button className='flex items-center px-4 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                <CiPlay1 size="20px" />
                <span className='ml-1'>Play</span>
                
            </button>
            <button className='flex items-center px-4 py-2 mx-2  bg-gray-500 bg-opacity-50 text-black rounded-md'>
                <CiCircleInfo size="20px" />
                <span className='ml-1'>Watch more</span>
                
            </button>
        </div>
    </div>
  );
}





