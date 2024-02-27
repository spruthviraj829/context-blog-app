import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-3'>

       <NavLink to={`/blog/${post.id}`}>
       <span className='font-bold text-lg'>{post.title}</span>
       </NavLink>
       <p className='flex gap-1 text-sm'>
       <span>By</span>
         <span className='italic'>{post.author}</span>
         <span> On</span>
         <NavLink to={`/categories/${post.category.replaceAll(" " ,"-")}`}>
         <span className='underline text-blue-500 font-bold'>{post.category}</span>
         </NavLink>
        </p>
        <p className='text-sm'>Posted On : {post.date}</p>
        <p className='text-sm mt-3'>{post.content}</p>

        <div className='gap-x-3 flex'  >
             { post.tags.map((tag ,index)=>{
            return <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}><span key={index} className='text-blue-500 text-xs underline font-bold mt-[5px]'>#{tag}</span></NavLink>
            })}
        </div>

    </div>
  )
}

export default BlogDetails


{/* <div key={post.id} className='mt-7'>
<p className='font-bold text-lg'>{post.title}</p>
<p className='text-sm'>
 By <span className='italic'>{post.author}</span> on <span className='underline'>{post.category}</span>
</p>
<p className='text-sm'>Posted On : {post.date}</p>
<p className='text-sm mt-3'>{post.content}</p>
<div className='gap-x-3 flex'  >
 { post.tags.map((tag ,index)=>{
     return <span key={index} className='text-blue-500 text-xs underline font-bold mt-[5px]'>#{tag}</span>
 })}
</div>
</div> */}