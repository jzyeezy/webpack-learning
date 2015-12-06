/**
 * Created by Joyce on 12/6/2015.
 */
import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

import todoActions from '../actions/todoActions'

class TodoContainer extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div id="todoContainer">
                <AddTodo addTodo={this.props.addTodo}></AddTodo>
                <TodoList todos={this.props.todos}></TodoList>
                <Footer></Footer>
            </div> );
    }
}

export default connect(
    (state) => state,
    todoActions
)(TodoContainer)