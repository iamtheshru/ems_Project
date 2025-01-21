import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskLIst = ({ data }) => {
    return (
        <>
            <div id='tasklist' className='h-[50%] flex flex-wrap justify-between gap-5  w-100 py-1 mt-16 '>
                {data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />
                    }
                })}
            </div>
        </>
    )
}

export default TaskLIst
