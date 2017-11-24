import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import TodoList from './todoList/todoList';
import TodoMobx from './todoMobx/todoMobx';
import TestDemo from './testDemo/testDemo';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

//const { BrowserRouter, Route, NavLink } = ReactRouterDOM;
//UI Composants

const { Header, Sider, Content, Footer } = Layout;

const Main = () => (
  <main>
    {/* <TodoList name="to do"/> */}
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/todoList" render={() => <TodoList name="to do" />} />
    <Route path="/testDemo" render={() => <TestDemo />} />
    <Route path="/todoMobx" render={() => <TodoMobx />} />
    {/* <Route path="/todoList" component={TodoList} name="to do.." />
    <Route path="/testDemo" component={TestDemo} /> */}

  </main>
)

class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header> < p className = "App-intro" > To get started,
          edit < code > src / App.js < /code>
          and save to reload.
        </p > */}
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span><NavLink
                  to="/todoList"
                  activeStyle={{
                    color: 'yellow',
                    fontWeight: 'bold'
                  }}>To Do List</NavLink></span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span><NavLink to="/testDemo" activeStyle={{
                  color: 'yellow',
                  fontWeight: 'bold'
                }}>Test Demo</NavLink></span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                background: '#fff',
                padding: 0
              }}>
              <Icon
                className="trigger"
                type={this.state.collapsed
                  ? 'menu-unfold'
                  : 'menu-fold'}
                onClick={this.toggle} /></Header>
            <Content style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}>
              <Main />
            </Content>
            <Footer style={{
              textAlign: 'center'
            }}>
              Ant Design ©2016 Created by Ant UED </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;