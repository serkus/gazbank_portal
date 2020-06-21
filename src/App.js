import React, {Component} from 'react';
import {w3cwebsocket as W3CWebSocket} from 'websocket';
import {Auth, Home} from "./pages/";
import {Route} from 'react-router-dom';

import './styles/index.scss'


const client = new W3CWebSocket('ws://localhost:8004/app/index');


class App extends Component {
    componentDidMount() {
        client.onopen = () => {
            console.log('Client connected');
        }
        client.close()
    }

    render() {
        return (
            <div className="wrapper">
                <Route exact path={['/', '/login']} component={Auth}/>
                <Route path='/home' component={Home}/>
            </div>
        )
    }
}

// function App() {
//     return (
//         <div className="wrapper" >
//             Practical Intro To WebSockets.
//         </div>
//     );
// }

export default App;
