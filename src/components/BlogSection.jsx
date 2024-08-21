import React from 'react'

const BlogSection = () => {
  return (
    <div className='my-20 mx-10 md:mx-auto w-fit flex flex-col md:flex-row gap-3 lg:gap-8 justify-center items-center'>
        {/* second blog will be here */}
        <div className='py-3  mb-4 flex flex-col gap-3 w-fit rounded-2xl shadow-md mx-auto bg-white flex-col'>
            <h3 className='text-3xl font-bold mx-5'>Say yes to vs code</h3>
            <img src="flavoro.jpg" alt="img" className='md:w-[30vw] rounded-3xl shadow-lg' />
            <div>
                <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize'>Coding</span>
                <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize'>Programming</span>
            </div> 

            
            <hr className='mx-5' />
            <div>
            <h4>Uttam</h4>
            <p>10-july-2003</p>
            </div>
           
        </div>
   
        {/* rest all blog be here */}
        <div></div>
      
    </div>
  )
}

export default BlogSection
