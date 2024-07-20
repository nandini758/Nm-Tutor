import React from 'react'

const Button = ({ name, fixed }) => {
    return (
        <>
            {
                fixed !== true ?
                    <div className='button bg-[#0CCE54] hover:bg-[#fff] hover:text-[#0CCE54] cursor-pointer transition-all duration-300 py-1.5 px-20 text-[30px] text-white font-semibold text-center uppercase rounded-lg'>
                        {name}
                    </div>
                    :

                    <div className='button bg-[#fff] hover:bg-[#0CCE54] hover:text-[#fff] cursor-pointer transition-all duration-300 py-1.5 px-20 text-[30px] text-[#0CCE54] font-semibold text-center uppercase rounded-lg'>
                        {name}
                    </div>
            }
        </>

    )
}

export default Button