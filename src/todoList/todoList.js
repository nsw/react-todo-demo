import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'antd';

import './todoList.scss';


class ToDoList extends Component {



    constructor(props) {
        super(props);
        this.state = { newTaskName: '' };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    //toDoList = [];
    getInitialState = () => {
        //this.state.newTaskName = '';
        // return { newTaskName: '' };
    }
    handleChange = (event) => {
        this.setState({ newTaskName: event.target.value });
    }

    addTask = () => {
        let newTask = this.state.newTaskName;
        //toDoList.push(newTask);
        alert("new Task: " + newTask + " added!");
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <br />
                <Row>
                    <Col span={8} offset={6}>
                        {/* <Input placeholder="Add new task" value={newTaskName} onChange={this.handleChange} /> */}
                        <Input placeholder="Add new task" value={this.state.newTaskName} onChange={this.handleChange} />
                    </Col>
                    <Col span={4} ><Button type="primary" onClick={this.addTask}>Add</Button></Col>
                </Row>
                <br />
                <h2>Tasks List </h2>



            </div>
        );
    }
}

export default ToDoList;