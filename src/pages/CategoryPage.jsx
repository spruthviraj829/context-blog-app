import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'



const CategoryPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/").at(-1)
  return (
    <div>
       <Header></Header>
      
      <div className='mt-24 mx-auto flex items-center  w-[600px] -mb-12 gap-x-12 '>
         <button 
         className='border px-3 rounded-sm py-1'
           onClick={()=>navigate(-1)}>
            Back
         </button>
        
        <h2  className='font-bold '>
            Blogs on <span className='text-blue-500 font-bold'>#{category}</span>
        </h2>
      </div>

       <Blogs/>
    <Pagination/>
    </div>
  )
}

export default CategoryPage
