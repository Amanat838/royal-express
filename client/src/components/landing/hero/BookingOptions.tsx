import hotel from '../../../assets/hotel.svg'
import airplane from '../../../assets/airplane.svg'
import Kaba from '../../../assets/Kaba.svg'
import ship from '../../../assets/ship.svg'
import nadra from '../../../assets/nadra.svg'
import { useState } from 'react'

const BookingOptions = () => {
    // type option = {
    //     icon: any
    //     id: Number
    //     text: String
    // }
    interface Option {
        id: number;
        text: string;
        icon: string
    }
    const options: Option[] = [
        { id: 1, icon: hotel, text: 'Hotel' },
        { id: 2, icon: airplane, text: 'Airline' },
        { id: 3, icon: Kaba, text: 'Umrah Package' },
        { id: 4, icon: ship, text: 'Cargo' },
        { id: 5, icon: nadra, text: 'Nadra' },
    ]
    const [isActiveIndex, setIsActiveIndex] = useState<Number|null>(null)
    return (
        <div className='flex border border-white bg-white bg-opacity-30 rounded-t-3xl overflow-hidden'>
            {/* <div onClick={()=> setIsActive(!isActive)} className={`flex items-center gap-1 py-4 px-4 border-r ${isActive ? 'bg-[#63AB45]' : ''}`}>
                <img src={hotel} alt="" />
                <p className='text-white font-title font-semibold'>Hotel</p>
            </div>
            <div onClick={()=> setIsActive(!isActive)} className={`flex items-center gap-1 py-4 px-4 border-r ${isActive ? 'bg-[#63AB45]' : ''}`}>
                <img src={airplane} alt="" />
                <p className='text-white font-title font-semibold'>Airline</p>
            </div>
            <div className='flex items-center gap-1 py-4 px-4 border-r'>
                <img src={Kaba} alt="" />
                <p className='text-white font-title font-semibold'>Umrah Package</p>
            </div>
            <div className='flex items-center gap-1 py-4 px-4 border-r'>
                <img src={ship} alt="" />
                <p className='text-white font-title font-semibold'>Cargo</p>
            </div>
            <div className='flex items-center gap-1 py-4 px-4'>
                <img src={nadra} alt="" />
                <p className='text-white font-title font-semibold'>Nadra</p>
            </div> */}
            {
                options.map((option) => {
                    return (
                        <div onClick={()=> setIsActiveIndex(option.id)} key={option.id} className={`flex items-center gap-1 py-4 px-4 border-r cursor-pointer ${isActiveIndex === option.id ? 'bg-[#63AB45]': ''}`}>
                            <img src={option.icon} alt="" />
                            <p className='text-white font-title font-semibold'>{option.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookingOptions
