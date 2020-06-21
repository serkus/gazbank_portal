import React, {Component} from 'react';
import {Auth, Home} from "./pages/";
import {Route} from 'react-router-dom';

import './styles/index.scss'



class App extends Component {

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
