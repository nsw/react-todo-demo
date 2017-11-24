import React, { Component } from 'react';
import { Input, Row, Col, Button, Table } from 'antd';

import './todoMobx.scss';


class ToDoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            newTaskName: '',
            toDoList: ['default task']
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ newTaskName: event.target.value });
    }


    addTask = () => {
        let newTask = this.state.newTaskName;
        this.state.toDoList.push(newTask);
        this.setState({ toDoList: this.state.toDoList });
        this.setState({ newTaskName: null });
    }

    deleteTask = (todoEntry) => {

        this.state.toDoList.pop(todoEntry);
        this.setState({ toDoList: this.state.toDoList });
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
                    {this.state.toDoList.map((todoEntry, i) =>
                        <Row>
                            <Col span={8} offset={6}>
                                <li key={i}>{todoEntry}</li>
                            </Col>
                            <Col span={4} ><Button type="danger" onClick={this.deleteTask(todoEntry)}>Done</Button></Col>
                            <br />
                        </Row>
                    )}
                </ul>

            </div>
        );
    }
}

export default ToDoList;