

const Locations = ({country, bgImg}:any) => {
    return (
        <div className="bg-[url('/assets/India.svg')] bg-center bg-no-repeat bg-cover rounded-2xl w-full flex flex-col gap-96 py-4"
        style={{backgroundImage: `url(${bgImg})`}}>
            <p className='text-base font-title text-[#63AB45] bg-white py-2 px-4 rounded-xl w-[30%] ml-56'>1 Tour</p>
            <div className='flex flex-col justify-end'>
                <p className='text-base text-white font-title text-center'>Travel to</p>
                <p className='text-[#63AB45] font-title text-6xl text-center'>{country}</p>
            </div>
        </div>
    )
}

export default Locations
