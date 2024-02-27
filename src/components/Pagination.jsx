import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const {page , handlePageChange ,totalPages} = useContext(AppContext);
  return (
    <div className='w-full border-2 shadow-md mt-6 fixed bottom-0 bg-white  '>
      <div className='flex justify-between w-11/12 mx-auto max-w-[600px] m-2'>
        <div  className='flex gap-x-2'>
          { page >1 &&( <button
          className='rounded-md shadow-sm border-2 px-4 py-1 '
           onClick={()=>handlePageChange(page-1)}>Previous</button>)}

          { page <totalPages && (<button 
             className='rounded-md shadow-sm border-2 px-4 py-1 '
          onClick={()=>handlePageChange(page+1)} >Next</button>)}              
        </div>
      <p>Page {page} of {totalPages}</p>
    </div>
    </div>
  )
}

export default Pagination
