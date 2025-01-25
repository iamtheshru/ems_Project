import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext);
    // console.log(authData);


    return (
        <div className='bg-[#1c1c1c] md:p-5 p-2 rounded mt-5'>
            <div className='bg-red-400 mb-2 py-2 md:px-4 px-1 text-center flex justify-between rounded'>
                <h2 className='lg:text-lg md:text-sm text-xs font-medium w-1/5'><span className='md:inline-block hidden'>Employee</span> Name</h2>
                <h3 className='lg:text-lg md:text-sm text-xs font-medium w-1/5'>New <span className='md:inline-block hidden'>Task</span></h3>
                <h5 className='lg:text-lg md:text-sm text-xs font-medium w-1/5'>Active <span className='md:inline-block hidden'>Task</span></h5>
                <h5 className='lg:text-lg md:text-sm text-xs font-medium w-1/5'>Completed <span className='md:inline-block hidden'>Task</span></h5>
                <h5 className='lg:text-lg md:text-sm text-xs font-medium w-1/5'>Failed <span className='md:inline-block hidden'>Task</span></h5>
            </div>
            <div className=''>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='text-lg font-medium text-center  w-1/5'>{elem.firstName}</h2>
                        <h3 className='text-lg font-medium text-center w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='text-lg font-medium text-center w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='text-lg font-medium text-center w-1/5 text-white'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium text-center w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask