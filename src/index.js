import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import Controller from './screens/Controller';
=======
import FoodOrderingApp from './FoodOrderingApp';
import {BrowserRouter as Router} from 'react-router-dom';
>>>>>>> d6961c8fe4e5599aab074210e723f727af4601f3

ReactDOM.render(
    <Router>
        <FoodOrderingApp/>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
