import React from 'react'
import {Link}from "react-router-dom"
const Mainsection = () => {
  return (
    <>
    <section className='py-20 bg-purple-500 min-h-[80vh] flex flex-col-reverse md:flex-row justify-between gap-5 items-center px-10 '>
        {/* information div */}
        <div className='flex flex-col gap-3'>

        <h2 className='text-4xl md:text-7xl font-bold text-white'>This is Uttam maurya</h2>
        <p className='text-lg md:text-3xl text-white font-sans lg:w-[50vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit nihil ea libero delectus, dignissimos unde obcaecati minima itaque numquam. </p>
<hr />

<div className='flex gap-2'>
    <span className='px-3 py-2 text-xs md:text-sm bg-white rounded-full font-semibold capitalize'>Coding</span>
    <span className='px-3 py-2 text-xs md:text-sm bg-white rounded-full font-semibold capitalize'>Programing</span>
</div>
<Link to={`blog/1212`}
 className='px-8 py-2 text-xs md:text-sm bg-white rounded-full font-semibold w-fit mt-3 decoration-white text-black ' >Read Now</Link>

        </div>

        {/* images div */}
        <img
        src="/flavoro.jpg" alt="img" 
        className='md:w-[40vw] rounded-3xl mt-14 md:mt-0 shadow-lg' />
        <div></div>





    </section>
    </>
  )
}

export default Mainsection
