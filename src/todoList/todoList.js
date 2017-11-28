import React, { Component } from 'react';
import { Input, Row, Col, Button, Table } from 'antd';

import './todoList.scss';

/*class TasksList extends Component {

    deleteTask = (todoEntry) => {
        this.state.toDoList.pop(todoEntry);
        this.setState({ toDoList: this.state.toDoList });
        //alert("new Task: " + newTask + " added, toDoList=" + this.state.toDoList);
    }

    render() {
        let todoEntries = this.props.entries;
        return (<ul>
            {todoEntries.map((todoEntry, index) => (
                <Row>
                    <Col span={8} offset={6}>
                        <li key={index}>{todoEntry}</li>
                    </Col>
                    <Col span={4} ><Button type="warn" onClick={this.deleteTask(todoEntry)}>Done</Button></Col>
                    <br />
                </Row>)
            )}
        </ul>
        )
    }
}*/

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTaskName: '',
            toDoList: [{ id: 0, name: "default task" }]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ newTaskName: event.target.value });
    }

    addTask = () => {

        let newTask = this.state.newTaskName;
        this.state.toDoList.push({ "id": this.state.toDoList.length + 1, "name": newTask });
        //this.setState({ toDoList: this.state.toDoList });
        this.setState({ newTaskName: null });
        //alert("new Task: " + newTask + " added, toDoList=" + this.state.toDoList);
    }

    deleteTask = (todoEntry) => {
        this.state.toDoList.pop(todoEntry);
        //this.setState({ toDoList: this.state.toDoList });
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <br />
                <Row>
                    <Col span={8} offset={6}>
                        <Input placeholder="Add new task" value={this.state.newTaskName} onChange={this.handleChange} />
                    </Col>
                    <Col span={4} ><Button type="primary" onClick={this.addTask}>Add</Button></Col>
                </Row>
                <br />
                <h2>Tasks List </h2>
                <br />
                {/*   <TasksList entries={this.state.toDoList} /> */}
                <ul>
                    {this.state.toDoList.map((todoEntry) =>
                        <Row key={todoEntry.id}>
                            <Col span={8} offset={6}>
                                <li>{todoEntry.name}</li>
                            </Col>
                            <Col span={4} ><Button type="danger" onClick={this.deleteTask}>Done</Button></Col>
                        </Row>
                    )}
                </ul>

            </div>
        );
    }
}

export default ToDoList;