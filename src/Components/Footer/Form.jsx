import React from 'react'

const Form = () => {
  return (
    <div className='w-full flex justify-center items-center mx-auto mt-12'>
    <form className='flex flex-col space-y-6 max-w-full px-4 md:px-0'>
        {/* Name and Surname fields */}
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
            <input 
                type="text" 
                placeholder="Emri" 
                className='w-[306px] md:w-[306px] p-4 bg-[#FADEEA] rounded-[10px] outline-none text-[#1F1634]' 
            />
            <input 
                type="text" 
                placeholder="Mbiemri" 
                className='w-full md:w-[306px] p-4 bg-[#FADEEA] rounded-[10px] outline-none text-[#1F1634]' 
            />
        </div>

        {/* Email field */}
        <div className='flex'>
            <input 
                type="email" 
                placeholder="Email" 
                className='w-full md:w-[630px] p-4 bg-[#FADEEA] rounded-[10px] outline-none text-[#1F1634]' 
            />
        </div>

        {/* Message field */}
        <div className='flex'>
            <textarea 
                placeholder="Mesazhi" 
                rows="5" 
                className='w-full md:w-[630px] p-4 bg-[#FADEEA] rounded-[10px] outline-none text-[#1F1634]' 
            />
        </div>

        {/* Submit button */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-center md:text-left text-[#FADEEA] font-custom1 font-light'>© 2021 Goje Gaditese.</p>
            <button 
                type="submit" 
                className="w-[131px] h-[32px] bg-[#D53D6E] rounded-[20px] text-[#F3CCE7] text-[14px] mt-4 md:mt-0"
            >
                Submit
            </button>
        </div>
    </form>
</div>
  )
}

export default Form