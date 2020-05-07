import React from "react";
import "./InputComponent.css"
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/Form'

const inputComponent = (props) => {
    return (<div>
        <FormControl size='lg' id="to-do-form" onSubmit={props.newItem}>
            <input type="text" onChange={props.changed} value={props.currentTask} placeholder="Enter task"/>
            <Button variant="outline-info" type="submit" onSubmit={props.newItem} > Add Task </Button>
        </FormControl>
    </div>)
}

export default inputComponent;
