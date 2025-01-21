import React from 'react'
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
    console.log(props.data);

    return (
        <>
            <div className='p-10 bg-[#1C1C1C] h-screen'>
                <Header data={props.data} changeUser={props.changeUser} />
                <TaskListNumber data={props.data} />
                <TaskList data={props.data} />
            </div>
        </>
    )
}

export default EmployeeDashboard
