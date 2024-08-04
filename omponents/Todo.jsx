import React from 'react'

const Todo = ({id,title,description,mongoId,complete,deleteTodo,completeTodo}) => {
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                {id+1}
            </th>
            <td className={`px-6 py-4 ${complete?"line-thought":""}`}>
                {title}
            </td>
            <td className={`px-6 py-4 ${complete?"line-thought":""}`}>
                {description}
            </td>
            <td className="px-6 py-4">
                {complete?"Completed":"Pending"}
            </td>
            <td className="flex px-6 py-4 flex">
                <button onClick={()=>deleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-black'>Delete</button>
                {complete?"":<button onClick={()=>completeTodo(mongoId)} className='py-2 px-4 bg-green-500 text-black'>Done</button>}
            </td>
        </tr>
    )
}

export default Todo
