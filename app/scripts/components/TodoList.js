/**
 * Created by Joyce on 12/6/2015.
 */
import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component{
    render(){
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo} key={index} onTodoClick={() => this.props.onTodoClick(index)}/>
                )}
            </ul>
        )
    }
}