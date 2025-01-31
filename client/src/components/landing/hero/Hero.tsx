import React from 'react'
import Navbar from './Navbar'
import BookingOptions from './BookingOptions'

const Hero = () => {
    return (
        <div className="bg-[url('/public/assets/heroBG.svg')] w-full py-8 px-20 flex flex-col items-center gap-28 bg-no-repeat bg-cover">
            <Navbar />
            <p className='text-8xl text-center text-white font-title'>Let’s Explore Your <br /> <span className='text-[#63AB45]'>Holiday</span> Trip.</p>
            <BookingOptions />
        </div>
    )
}

export default Hero
