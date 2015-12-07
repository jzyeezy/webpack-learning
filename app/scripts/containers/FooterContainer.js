/**
 * Created by Joyce on 12/6/2015.
 */

import React from 'react'
import {connect} from 'react-redux'
import filterActions from '../actions/filterActions'

class Footer extends React.Component{
    render(){
        console.log(this.props);
        return (
            <p>
                Show:
                {' '}
                <a href="#" onClick={() => this.props.setFilter('SHOW_ALL')}>All</a>
                {' '}
                <a href="#" onClick={() => this.props.setFilter('SHOW_ACTIVE')}>Active</a>
                {' '}
                <a href="#" onClick={() => this.props.setFilter('SHOW_COMPLETED')}>Completed</a>
            </p>
        )
    }
}

export default connect(
    (state) => state.visibilityFilter,
    filterActions
)(Footer)