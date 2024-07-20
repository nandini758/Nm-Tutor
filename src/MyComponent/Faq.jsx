import React, { useState } from 'react'

const Faq = ({ data }) => {

    const [open, setOpen] = useState(false);

    const handleAns = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div onClick={handleAns} className='bg-[#F8AF1D] text-[18px] font-medium py-2 px-5  cursor-pointer'>
                <span>{open ? ">" : "<"}</span>{" "}
                {data.quest}</div>



            <div className={`overflow-hidden transition-max-height duration-1000 ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {open && <div className={`text-[18px] text-[#fff] py-2 px-5 transition-all duration-[5s]  ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    {data.ans}
                </div>
                }
            </div>


        </div >
    )
}

export default Faq