import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Header from '../component/Header'
import { useRouter } from 'next/router'


export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const data = await res.json();

  return {
    props: {
      countries: data
    }
  }

}


const Country = ({ countries }) => {
  const [country, setCountry] = useState([])
  // console.log(countries)
  const router = useRouter()
  const { name } = router.query
 

  React.useEffect(() => {
    countries?.map((country) => {
      if (country.name == name) {
        setCountry(country)
        console.log(country)
      }
    })
  }, [])


  return (
    <div className=''>
      <Header />
      <div className='p-6 w-full mt-6 md:flex-row container mx-auto sm:px-20'>
        <button
          type="submit"
          className="group relative w-28  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white mt-5 dark:bg-black dark:text-white" style={{ boxShadow: " 0 0 0 0.2rem rgba(150, 153, 161, 0.25)" }} onClick={() => router.push(`/`)}>
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <Icon icon="bi:arrow-left" className="h-5 w-5 text-black dark:text-white group-hover:white" aria-hidden="true" />
          </span>
          Back
        </button>

      </div>


      <div className='flex justify-between flex-col md:flex-row p-6 mt-6 sm:px-20 mx-auto container'>
        <div className='flex-1 mr-20'>
          <img src={country.flag} alt='' className='w-full' />
        </div>
        <div className='w-full flex-1'>
          <h4 className='text-2xl font-bold pt-5'>{country.name}</h4>
          <div className='flex flex-col md:flex-row mt-3'>
            <div className='sm:mr-28 sm:mr-none'>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white text-1xl mb-1'>Native Name: </small> {country.nativeName}</p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Population </small> {country.population} </p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Region: </small> {country.region}</p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Sub Region: </small> {country.subregion}</p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Capital: </small> {country.capital}</p>
            </div>
            <div className='sm:ml-28 sm:ml-none mt-4 sm:mt-0'>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Top Level Domain: </small> {country.topLevelDomain}</p>
              {country.currencies ? (
                <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Currencies: </small> {country.currencies[0].name}</p>
              ) :
                (
                  <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Languages: </small></p>
                )

              }
              

              {country.languages ? (
                <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Languages: </small>{country.languages[0].name} {country.languages[1]?.name} {country.languages[2]?.name}</p>
              ) :
                (
                  <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Languages: </small></p>
                )

              }

            </div>
          </div>

          {country.borders ? (
            <div className='sm:flex  flex-col md:flex-row mt-8 items-center'>
              <p className='card-text font-bold sm:mr-10'>Border Countries:</p>
              <p className="justify-between sm:space-x-10 flex space-x-2 mt-2 md:flex-row">
                <a
                  type="submit"
                  className=" w-28  flex justify-center py-2 px-2 border border-transparent text-sm font-small rounded-md text-black bg-white dark:bg-black dark:text-white" style={{ boxShadow: " 0 0 0 0.2rem rgba(150, 153, 161, 0.25)" }} >
                  {country.borders[0]}
                </a>
                <a
                  type="submit"
                  className=" w-28  flex justify-center py-2 px-2 border border-transparent text-sm font-small rounded-md text-black bg-white dark:bg-black dark:text-white" style={{ boxShadow: " 0 0 0 0.2rem rgba(150, 153, 161, 0.25)" }} >
                  {country.borders[1]}
                </a>
                <a
                  type="submit"
                  className=" w-28  flex justify-center py-2 px-2 border border-transparent text-sm font-small rounded-md text-black bg-white dark:bg-black dark:text-white" style={{ boxShadow: " 0 0 0 0.2rem rgba(150, 153, 161, 0.25)" }} >
                  {country.borders[2]}
                </a>
              </p>

            </div>

          ) : (
            <div className='sm:flex justify-between flex-col md:flex-row mt-8 items-center'>
              <p className='card-text font-bold dark:text-white'>Border Countries:</p>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Country
