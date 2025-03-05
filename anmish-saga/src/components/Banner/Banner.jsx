import React from 'react'
import BannerPng from '../../assets/Banner1.png'
import { BiPlayCircle } from 'react-icons/bi'

const Banner = () => {
  return (
    <div className='py-12 sm:py-0 relative'>
      <div className="container min-h-[620px] flex items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  place-items-center">
          {/* image section */}
          <div>
            <img src={BannerPng} alt="" className='relative w-full max-w-[400px]'/>
          </div>
          {/* text content section */}
          <div className=' space-y-5 lg:pr-20'>
            <h1 className="text-4xl font-semibold">
              GET READY TO ENJOY VR {""}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> MOVIES WITH OUR PLATFORM</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam possimus voluptatibus similique, alias, fugiat voluptates eius perferendis, iusto accusamus odio cumque hic explicabo. Architecto, praesentium veritatis. Aliquid numquam natus fuga.
            </p>
            <div className='flex gap-6'>
              <button className="primary-btn">Get Started</button>
              <button className="flex items-center gap-2 ">
                {""}
                <BiPlayCircle className='text-3xl'/>
                Watch Demo
              </button>
            </div>
            

          </div>
        </div>

      </div>
      
      </div>
  )
}

export default Banner