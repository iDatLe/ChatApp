import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import MappedRoutes from './routes/mappedRoutes.js'
import routes from './routes/routes.js'
if(process.env.WEBPACK) require('./scss/main.scss');

class App extends Component {

    render() {
        return (
            <div>
                <div className="content">
                    <MappedRoutes routes={routes} />
                </div>
            </div>
        )
    }
}

export default hot(module)(withRouter(App));