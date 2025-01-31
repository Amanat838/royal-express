import logo from '../../../assets/logo.svg'
import navIcon from '../../../assets/navIcon.svg'
import navMenu from '../../../assets/navMenu.svg'

const Navbar = () => {
  return (
    <div className='bg-white w-[1370px] bg-opacity-60 rounded-full flex items-center gap-40'>
      <div className='flex items-center gap-44 px-4 py-2'>
        <div className='flex items-center gap-2 '>
          <img src={logo} alt="" />
          <p className='text-white font-medium font-title text-lg'>ROYAL EXPRESS</p>
        </div>
        <div className='flex gap-20 text-white font-title text-base'>
          <p>Home</p>
          <p>Tours</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex items-center'>
          <div className='border-l h-[60px] flex items-center pl-4 border-r pr-4'>
            <img src={navIcon} alt="" />
          </div>
          <div className='h-[60px] flex items-center border-r pl-4 pr-4'>
            <img src={navMenu} alt="" />
          </div>
        </div>
        <div>
          <button className='text-white font-title bg-[#63AB45] rounded-3xl px-6 py-2'>Book a Trip</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
