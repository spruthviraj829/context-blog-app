import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import BlogDetails from '../components/BlogDetails'
import { useLocation, useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'
import { baseUrl } from '../baseUrl'
import Spinner from '../components/Spinner'

const BlogPage = () => {
   const newBaseUrl ="https://codehelp-apis.vercel.app/api/"
    const [blog ,setBlog] = useState(null)
    const [relatedBlogs ,setReletedBlogs] = useState([])
    const location = useLocation();
    const navigate = useNavigate()
    const {loading , setLoading} = useContext(AppContext)
    
    const blogId = location.pathname.split("/").at(-1)
 
   async function fetchReletedBlogs(){
       setLoading(true)
       let url = `${newBaseUrl}get-blog?blogId=${blogId}`
       console.log('url is:')
       console.log(url)
       try{
        const res= await fetch(url)
        const data = await res.json();
        console.log('printing the data of specific blog')
        console.log(data)
        setBlog(data.blog)
        setReletedBlogs(data.relatedBlogs)
       }
       catch(error){
      console.log("Error in fetching")
      setBlog(null)
      setReletedBlogs([])
       }
       setLoading(false)
   }

   useEffect(()=>{
    
      if(blogId){
        fetchReletedBlogs();
      }
   },[location.pathname])

  return (
    <div className=''>
        <Header/>
        <div className='mt-24 w-[600px] mx-auto'
        >
            <button 
               className='border px-3 rounded-sm py-1' 
            onClick={()=>navigate(-1)}>
                Back
            </button>
        </div>
      
      {
        loading ?(<p className='fixed left-[750px] top-8'><Spinner/></p>):
        ( blog?(
          <div className='w-11/12 max-w-[600px] mt-8  justify-center items-center mb-20 mx-auto'>
             <BlogDetails post={blog}/>
             
             <h2 className='font-bold text-2xl mt-8'>Related Blogs</h2>
             {
                relatedBlogs.map((blog)=>(
                    <BlogDetails post={blog} key={blog.id}/>
                ))
             }
          </div>     
        ):
        (<p className='text-center items-center '>No Blog Found</p>) )
      }

    </div>
  )
}

export default BlogPage
