import React from 'react'
import { Icon } from '@iconify/react'


const Header = () => {
  const changeTheme = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <section className='p-6 w-full bg-[#FFF] dark:bg-black'>
      <div className='flex justify-between container mx-auto sm:px-20'>
        <div className=''>
          <h5 className='text-1xl sm:2xl font-bold text-black dark:text-white'> Where in the world?</h5>
        </div>
        <div className=' flex items-center'>
        <Icon icon="clarity:moon-line" />
        <button className='text-1xl text-black ml-1 dark:text-white' type="button" onChange={e => toggleTheme(e)}>Dark Mode</button>
        </div>
      </div>
    </section>
  )
}

export default Header