import React from 'react'
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


const Country = ({countries}) => {
  // console.log(countries)
  const router = useRouter()
  const { id } = router.query
  console.log(id)
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
          <img src={countries[id]?.flag} alt='' className='w-full' />
        </div>
        <div className='w-full flex-1'>
          <h4 className='text-2xl font-bold pt-5'>{countries[id]?.name}</h4>
          <div className='flex flex-col md:flex-row mt-3'>
            <div className='sm:mr-28 sm:mr-none'>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white text-1xl mb-1'>Native Name: </small> {countries[id]?.nativeName}</p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Population </small> {countries[id]?.population} </p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Region: </small> {countries[id]?.region}</p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Sub Region: </small> {countries[id]?.subregion}</p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Capital: </small> {countries[id]?.capital}</p>
            </div>
            <div className='sm:ml-28 sm:ml-none mt-4 sm:mt-0'>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Top Level Domain: </small> {countries[id]?.topLevelDomain}</p>
              <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Currencies: </small> {countries[id]?.currencies[0].name}</p>
              {countries[id]?.languages.length > 1  ? (
                 <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Languages: </small>{countries[id]?.languages[0].name}, {countries[id]?.languages[1].name}, {countries[id]?.languages[2].name}</p>
              ):
              (
                <p className='card-text dark:text-white'><small className='font-bold dark:text-white'>Languages: </small>{countries[id]?.languages[0].name}</p>
              )
            
            }
             
            </div>
          </div>

          {countries[id]?.borders ? (
            <div className='sm:flex  flex-col md:flex-row mt-8 items-center'>
            <p className='card-text font-bold sm:mr-10'>Border Countries:</p>
            <p className="justify-between sm:space-x-10 flex space-x-2 mt-2 md:flex-row">
            <a
              type="submit"
              className=" w-28  flex justify-center py-2 px-2 border border-transparent text-sm font-small rounded-md text-black bg-white dark:bg-black dark:text-white" style={{ boxShadow: " 0 0 0 0.2rem rgba(150, 153, 161, 0.25)" }} >
                {countries[id]?.borders[0]}
            </a>
            <a
              type="submit"
              className=" w-28  flex justify-center py-2 px-2 border border-transparent text-sm font-small rounded-md text-black bg-white dark:bg-black dark:text-white" style={{ boxShadow: " 0 0 0 0.2rem rgba(150, 153, 161, 0.25)" }} >
                {countries[id]?.borders[1]}
            </a>
            <a
              type="submit"
              className=" w-28  flex justify-center py-2 px-2 border border-transparent text-sm font-small rounded-md text-black bg-white dark:bg-black dark:text-white" style={{ boxShadow: " 0 0 0 0.2rem rgba(150, 153, 161, 0.25)" }} >
            {countries[id]?.borders[2]}
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
