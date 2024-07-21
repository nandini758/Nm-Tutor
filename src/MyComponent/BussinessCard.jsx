import React from 'react'

const BussinessCard = ({ data, index }) => {
    return (

        <div className='button py-10' style={{ backgroundColor: index === 0 || index === 3 || index === 6 || index === 9 ? "#FFBD39" : index === 2 || index === 5 || index === 8 || index === 11 ? "#0BA042" : "#2B2B2B" }}>

            <div className='max-w-[1100px]  mx-auto gap-5 grid grid-cols-1 lg:grid-cols-4 p-5'>

                <div>
                    <img
                        loading="lazy"
                        alt='bussines image'
                        srcSet={data.image}
                        className="self-center max-w-full aspect-square w-[163px]"
                    />
                </div>
                <div className=' lg:col-span-2  flex flex-col  justify-center'>
                    <div className="text-3xl font-black leading-7 uppercase text-[#131313] max-md:max-w-full" style={{ color: index === 0 || index === 3 || index === 6 || index === 9 ? "#131313" : "white" }}>
                        {data.heading}
                    </div>
                    <div className="mt-5 text-base leading-8 text-zinc-800 max-md:max-w-full" style={{ color: index === 0 || index === 3 || index === 6 || index === 9 ? "#131313" : "white" }}>
                        {data.subheading}
                        {/* <span className="font-bold">Online</span> */}
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <div className="button flex flex-col justify-center w-full py-4 text-2xl font-bold leading-6 text-center text-white uppercase bg-green-500 rounded-xl shadow-sm max-md:pr-6 max-md:pl-6">
                        Value:
                        <br />
                        <span className="line-through">₹{data.price}/-</span>
                    </div>
                </div>

            </div>



        </div >

    )
}

export default BussinessCard