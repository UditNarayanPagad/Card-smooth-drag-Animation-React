import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
    return (
        <>
            <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.1}} className='relative w-44 h-56 rounded-[30px] bg-zinc-300/50 px-8 py-5 overflow-hidden'>
                <FaRegFileAlt />
                <p className='mt-4 leading-tight text-sm font-semibold'>{data.desc}</p>
                <div className="footer absolute bottom-0 w-full left-0">
                    <div className='w-full py-2 px-6 flex justify-between items-center'>
                        <h5 className='text-sm font-bold'>{data.fileSize}</h5>
                        {data.close ? <IoCloseCircle/> : <FaArrowCircleDown />}        
                    </div>
                    {data.tag.isOpen && (<div className={`w-full ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-sky-800"} flex items-center justify-center py-2 font-bold text-white`}>
                        <h5>{data.tag.tagLine}</h5>
                    </div>)}
                </div>
            </motion.div>
        </>
    )
}

export default Card