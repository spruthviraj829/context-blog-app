import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {
  const {posts ,loading} = useContext(AppContext)
  
  return (
    <div className='w-11/12 max-w-[600px] mt-16 flex justify-center items-center mb-20 mx-auto'>
        <div>
        { 
            loading ?
            (<Spinner/>):
            (
               posts.length === 0 ? (<p>Post Not Found</p>) : 
               ( posts.map((post)=>(
                 <BlogDetails post={post} id={post.id}/>
               )))
            )
        }
        </div>
   </div>

  )
      }

export default Blogs 
