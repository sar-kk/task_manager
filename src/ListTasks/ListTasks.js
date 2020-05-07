import React from "react";
import './ListTasks.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const ListTasks = (props) => {
    const tasks = props.tasks;
    const listTasks = tasks.map((task, key) => {
        return <div className="list" key={key}>
            <p>{task.text}
                <span>
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteTask(task.key)
        }} icon="trash" />
        </span>
            </p>
        </div>
    })
    return (
        <div>
            {listTasks}
        </div>

    )

}
export default ListTasks;
