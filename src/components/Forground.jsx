import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {
  const ref = useRef(null);

  let data = [
    {desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",fileSize:".9 mb",close:true,tag:{isOpen:false,tagLine:"Download Now",tagColor:"sky"},},
    {desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",fileSize:".6 mb",close:true,tag:{isOpen:true,tagLine:"Download Now",tagColor:"green"},},
    {desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",fileSize:"1.2 mb",close:false,tag:{isOpen:true,tagLine:"Download Now",tagColor:"sky"},},
  ];
  return (
    <>
    <div ref={ref} className='fixed z-[3] w-full h-screen flex gap-6'>
      {data.map((item,index)=>(
        <Card data={item} reference = {ref}/>
      ))}
     </div>
    </>
  )
}

export default Forground