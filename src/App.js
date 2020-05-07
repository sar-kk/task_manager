import React, {Component} from 'react';
import './App.css';
import "./InputComponent/InputComponent.css"
import InputComponent from './InputComponent/InputComponent'
import ListTasks from './ListTasks/ListTasks'
import './ListTasks/ListTasks.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currentTask: {
                text: '',
                key: ''
            }
        }
        // this.handleInput = this.handleInput.bind(this);
        // this.addItemHandler = this.addItemHandler.bind(this);
    }

    handleInput = (event) => {
        this.setState({
            currentTask: {
                text: event.target.value,
                key: Date.now()

            }
        })
    }
    addItemHandler = (event) => {
        event.preventDefault(); //anuluje wykonanie zdarzenia, jesli nie moze byc wykonane xd
        const newTask = this.state.currentTask;
        console.log(newTask);
        if (newTask.text !== "") {
            const newTasks = [...this.state.tasks, newTask]
            this.setState({
                tasks: newTasks,
                currentTask: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    deleteTaskHandle = (key) => {
        const filteredTasks = this.state.tasks.filter(task =>
            task.key !== key);
        this.setState({
            tasks: filteredTasks
        })
    }

    render() {
        return (
            <div className="App">
                <h1> Task Manager</h1>
                <header>

                    <InputComponent currentTask={this.state.currentTask.text}
                                    changed={this.handleInput}
                                    newItem={this.addItemHandler}/>

                    <ListTasks tasks={this.state.tasks} deleteTask= {this.deleteTaskHandle}/>
                </header>
            </div>
        );
    }
}

export default App;
