import React from 'react'
import ReactDom from 'react-dom'
import { connect, Provider } from 'react-redux'
import configureStore from './store/configureStore'
import TodoContainer from './containers/todoContainer'

let store = configureStore();

ReactDom.render
    (<Provider store={store}>
        <TodoContainer></TodoContainer>
    </Provider>,
    document.getElementById('content'));


