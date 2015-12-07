import React from 'react'
import ReactDom from 'react-dom'
import { connect, Provider } from 'react-redux'
import configureStore from './store/configureStore'
import TodoContainer from './containers/todoContainer'
import Footer from './containers/footerContainer'

let store = configureStore();

class MyApp extends React.Component{
    render(){
        return (
            <div>
                <TodoContainer></TodoContainer>
                <Footer></Footer>
            </div>
        )
    }
}

ReactDom.render
    (<Provider store={store}>
        <MyApp></MyApp>
    </Provider>,
    document.getElementById('content'));


