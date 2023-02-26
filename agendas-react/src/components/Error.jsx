import React from 'react'

function Error({mensaje}) {
  return (
    <div className='bg-red-600 w-full rounded-md p-3
               text-white uppercase font-bold  
               text-center mb-5 transition-all md:animate-pulse'
               > 
    
         <p>{mensaje}</p> 
 
    </div>
  )
}

export default Error