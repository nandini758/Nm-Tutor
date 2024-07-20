import React from 'react'

const Card = ({ data }) => {
    return (
        <>
            {
                data.image && <div className="card flex flex-col gap-5 justify-center mb-5 border-r-4 border-b-4 border-[#34AF37] items-center bg-[#131313] py-6 rounded-lg  shadow-2xl">
                    <img
                        loading="lazy"
                        alt='card'
                        srcSet={data.image}
                        className="self-center max-w-full aspect-square w-[163px]"
                    />
                    <div className="text-white text-[16px] font-semibold ">
                        {data.heading}
                    </div>
                </div>
            }

        </>

    )
}

export default Card