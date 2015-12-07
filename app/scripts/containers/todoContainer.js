/**
 * Created by Joyce on 12/6/2015.
 */
import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

import todoActions from '../actions/todoActions'

class TodoContainer extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div id="todoContainer">
                <AddTodo addToDo={this.props.addTodo}></AddTodo>
                <TodoList todos={this.props.todos} onTodoClick={this.props.completeTodo}></TodoList>
            </div> );
    }
}

export default connect(
    (state) => state.todos,
    todoActions
)(TodoContainer)