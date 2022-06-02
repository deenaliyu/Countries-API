import React from 'react'
import { Icon } from '@iconify/react'

const Select = () => {
    return (
      
        <select className='border-none bg-white rounded p-2 outline-none w-48'>
            <option className='py-1'>Filter by Region</option>
            <option className='py-1'>Africa</option>
            <option className='py-1'>America</option>
            <option className='py-1'>Asia</option>
            <option className='py-1'>Europe</option>
            <option className='py-1'>Oceania</option>
        </select>
    )
  }
  
  export default Select