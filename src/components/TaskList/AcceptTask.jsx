import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className=' w-[100%] sm:w-[45%] lg:w-[23%]  p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs me-1 '>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs '>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask