import Header from '../component/Header'
import Main from '../component/Main'
// import React, { useState, useEffect } from 'react'

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const data = await res.json();

  return {
    props: {
      countries: data
    }
  }

}

export default function Home({ countries }) {
  // console.log(countries);
  // const [term, setTerm] = useState('');
  return (
    <div className=''>
      <Header/>
      <Main countries={countries}  />
    </div>
  )
}
