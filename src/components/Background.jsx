import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className="nav absolute top[5%] py-10 w-full flex justify-center text-zinc-400 text-xl font-bold">
        Documents
      </div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] text-[15vw] leading-none tracking-tighter text-zinc-400 font-semibold'>Docs.</h1>
    </div>
    </>
  )
}

export default Background