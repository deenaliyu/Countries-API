import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import Country from '../pages/countries'


const Main = ({ countries }) => {
  // console.log(countries.length)
  const router = useRouter()
  const [value, setValue] = useState('')
  const [filterParam, setFilterParam] = useState(["All"]);



  function search(countries) {

    return countries.filter((country) => {
      if (country.region == filterParam) {
        if (country.name.toLowerCase().startsWith(value)) {

          return (
            country

          );

        }
      } else if (filterParam == "All") {

        if (country.name.toLowerCase().startsWith(value)) {

          return (
            country

          );

        }
      }
    });
  }

  return (

    <section className='p-6 w-full mt-6' >
      <div className=' justify-between container mx-auto sm:px-20 sm:flex'>
        <div className=''>
          <div className="mt-1 flex rounded-md shadow-sm bg-[#FFF] dark:bg-black w-full sm:w-96 mb-5 sm:mb-0">
            <span className="block bg-transparent outline-none p-3 text-black dark:text-white">
              <Icon icon="ant-design:search-outlined" className="text-gray" width="24" height="24" /></span>
            <input onChange={e => setValue(e.target.value.toLowerCase())} type='search' placeholder='search for a country...' className='block bg-transparent outline-none h-9 p-6 text-black  dark:text-white border-none' value={value} />
          </div>
        </div>
        <div className=' flex'>
          <select className='border-none bg-white dark:bg-black rounded p-2 outline-none w-48' onChange={(e) => {
            setFilterParam(e.target.value);
          }}>
            <option className='py-1' value="All">Filter by Region</option>
            <option className='py-1' value="Africa">Africa</option>
            <option className='py-1' value="Americas">America</option>
            <option className='py-1' value="Asia">Asia</option>
            <option className='py-1' value="Europe">Europe</option>
            <option className='py-1' value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className=' container mx-auto sm:px-20 mt-6' >
        <div className=' grid  gap-20 md:grid-cols-4 sm:grid-cols-1'>


          {countries.length == 0 ? (
            <p>Loading countries</p>
          ) : (
            search(countries).map((country, i) => (
              <Cards key={i} country={country} handleNextClick={() => { router.push({ pathname: "/countries", query: { name: country.name } }) }} />
            ))
          )
          }
        </div>

      </div>

    </section>
  )
}

export default Main