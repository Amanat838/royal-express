import React from 'react'
import Locations from './Locations'

const Services = () => {
    const country = [
        {
            name: 'India',
            bgImg: '/assets/India.svg'
        },
        {
            name: 'America',
            bgImg: '/assets/America.svg'
        },
        {
            name: 'Pakistan',
            bgImg: '/assets/Pakistan.svg'
        },
        {
            name: 'Germany',
            bgImg: '/assets/Germany.svg'
        }
    ]
    return (
        <div className='mt-20 w-full space-y-16'>
            <div className='flex justify-center'>
                <p className='text-4xl text-[#63AB45] text-center font-title border border-[#63AB45] w-[17%] rounded-xl py-2'>Services</p>
            </div>
            <p className='text-[#161616] text-6xl text-center font-title'>Trendy Travel Locations</p>
            <div className='w-full flex gap-4 px-10'>
                {
                    country.map((item, index) => {
                        return (
                            <div key={index} className={`w-[25%] ${index === 0 || index === 2 ? 'mt-14' : ' '}`}>
                                <Locations country={item.name} bgImg={item.bgImg} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Services
