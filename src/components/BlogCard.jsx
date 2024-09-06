import {Link}from 'react-router-dom';

const BlogCard = () => {
  return (
    <div>
      <Link to={`/blog/${12374}`} className='relative flex flex-col md:flex-row gap-3 justify-start items-center md:px-5 rounded-3xl shadow-md bg-white w-full h-fit'>
      <img src="/i.jpg" alt="img" className='md:w-[10vw] rounded-2xl md:rounded-3xl' />
      <div className='px-3 md:px-0'>
        <h3 className='text-xl font-bold'>MERN Stack is the best</h3>
        <div className='flex gap-2 py-2'>
            <span className=' px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold shadow-md capitalize'>Coding</span>
            <span className=' px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold shadow-md capitalize'>Programming</span>
        </div>
        <hr className='my-2' />
        <div className='flex justify-start items-center gap-3'>
            <img src="/i.jpg" alt="img" className='rounded-full w-[30px] h-[30px]' />

            <div>
            <h4 className='font-bold text-sm' >Uttam</h4>
            <p  className='font-bold text-sm'>24 Mar 2024</p>
            </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default BlogCard;
