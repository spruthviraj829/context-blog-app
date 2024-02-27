import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
const TagPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1)
  return (
    <div>
       <Header></Header>
      
      <div className='mt-24 mx-auto flex items-center  w-[600px] -mb-12 gap-x-12'>
         <button 
         className='border px-3 rounded-sm py-1'
           onClick={()=>navigate(-1)}>
            Back
         </button>
        
        <h2 className='font-bold '>
            Blogs Tagged <span className='text-blue-500 font-bold'>#{tag}</span>
        </h2>
      </div>
    <Blogs/>
    <Pagination/>
    </div>
  )
}

export default TagPage
