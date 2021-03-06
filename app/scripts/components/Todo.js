/**
 * Created by Joyce on 12/6/2015.
 */
import React from 'react';

export default class Todo extends React.Component{
    render(){
        return (
            <li
                onClick={ this.props.onTodoClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'cursor' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}
