/**
 * Created by Joyce on 12/6/2015.
 */
import React from 'react';

export default class AddTodo extends React.Component{
    render(){
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={() => {this.props.addTodo(this.refs.input.value); }}>Add</button>
            </div>
        )
    }

    handleClick(e){
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}