/**
 * Created by Joyce on 12/6/2015.
 */

import React from 'react'

export default class Footer extends React.Component{
    render(){
        return (
            <p>
                Show:
                {' '}
                <a href="#">All</a>
                {' '}
                <a href="#">Active</a>
                {' '}
                <a href="#">Completed</a>
            </p>
        )
    }
}