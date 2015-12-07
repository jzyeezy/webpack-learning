/**
 * Created by Joyce on 12/6/2015.
 */
import React from 'react';

export default class AddTodo extends React.Component{
    render(){
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={() => {this.props.addToDo(this.refs.input.value); this.refs.input.value = ""; }}>Add</button>
            </div>
        )
    }
}