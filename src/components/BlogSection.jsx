// import React from 'react'
import BlogCard from './BlogCard'
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
            <div className='mx-5 flex justify-start items-center gap-3'>
                <img src="/i.jpg" alt="" className='rounded-full w-[40px] h-[40px]'/>
            </div>
            <div>
            <h4 className='font-bold'>Uttam</h4>
            <p  className='font-bold' >10-july-2003</p>
            </div>
           
        </div>
   
        {/* rest all blog be here */}
        <div className='grid gird-cols-1 gap-3 md:h-[80vh] md:overflow-y-scroll md:px-3 md:pb-2 scoll-hide'>
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
        </div>
      
    </div>
  )
}

export default BlogSection
