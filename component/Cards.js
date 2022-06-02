import React from 'react'

import { Icon } from '@iconify/react'



const Cards = ({ country, handleNextClick }) => {
  
  return (
    // <section className=' w-full mt-12'>
    // {/* <div className='flex flex-col md:flex-row container mx-auto sm:px-20'> */}
    
    <div className='card w-68' onClick={handleNextClick}>
      <img src={country.flag} alt='' className='w-full' />
      <div className='card-body'>
        <h5 className='font-bold  dark:text-white mb-3'>{country.name}</h5>
        <p className='card-text  dark:text-white'><small className='font-bold  dark:text-white'>Population: </small>{country.population}</p>
        <p className='card-text  dark:text-white'><small className='font-bold  dark:text-white'>Region:  </small>{country.region}</p>
        <p className='card-text  dark:text-white'><small className='font-bold  dark:text-white'>Capital: </small>{country.capital}</p>
      </div>
    </div>
    // </div>
    // </section>
  )
}

export default Cards