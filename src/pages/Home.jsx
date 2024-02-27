import React from 'react'
import Blogs from "../components/Blogs"
import Header from '../components/Header'
import Pagination from "../components/Pagination"
const Home = () => {
  return (
    <div>
        <div className='w-full h-full flex flex-col justify-center items-center'> 
             <Header></Header>
             <Blogs></Blogs>
             <Pagination></Pagination>
         </div>
    </div>
  )
}

export default Home
