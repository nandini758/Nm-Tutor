import React from 'react'

const TeachersCard = ({ data }) => {
    return (
        <div className=' border-4 border-green-600 rounded-br-[30px] rounded-bl-[30px] overflow-hidden'>

            <img
                srcSet={data.image}
                alt='teachers'
                className="self-center max-w-full h-[250px] w-full object-cover"

            />
            <div className='bg-[#131313] py-3 p-2'>
                <p className='text-[20px] leading-7 text-center text-[white] font-semibold'>{data.name}</p>
                <p className='text-[14px] text-center text-[white] font-semibold px-5'>{data.desination}</p>
            </div>
        </div>
    )
}

export default TeachersCard