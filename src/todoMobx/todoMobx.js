import React, { Component } from 'react';
import { Input, Row, Col, Button, Table } from 'antd';
import { observer } from 'mobx-react';
import {observable, computed, reaction} from 'mobx';

import './todoMobx.scss';

import PropTypes from 'prop-types';
import DevTool from 'mobx-react-devtools';


@observer
export default class TodoMobx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: '',
            @observable 
             toDoList: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ newTaskName: event.target.value });
    }

    addTask = () => {

        let newTask = this.state.newTaskName;
        this.state.toDoList.push({ "id": this.state.toDoList.length + 1, "name": newTask });
       // this.setState({ toDoList: this.state.toDoList });
        this.setState({ newTaskName: null });
        //alert("new Task: " + newTask + " added, toDoList=" + this.state.toDoList);
    }

    deleteTask = (todoEntry) => {
        this.state.toDoList.pop(todoEntry);
       // this.setState({ toDoList: this.state.toDoList });
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


    /*  componentDidMount() {
         if (__CLIENT__) {
             var { Router } = require('director/build/director');
             var viewStore = this.props.viewStore;
             var router = Router({
                 '/': function () { viewStore.todoFilter = ALL_TODOS; },
                 '/active': function () { viewStore.todoFilter = ACTIVE_TODOS; },
                 '/completed': function () { viewStore.todoFilter = COMPLETED_TODOS; }
             });
             router.init('/');
         }
     } */
}
/* 
TodoMobx.propTypes = {
    viewStore: PropTypes.object.isRequired,
    todoStore: PropTypes.object.isRequired
}; */