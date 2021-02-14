import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Catalogo from '../pages/Catalogo.jsx';
import Login from '../pages/Login.jsx';
import Logout from '../pages/Logout.jsx';

class Won extends React.Component {
    render(){
        return <HashRouter>
            <Switch>                
                <Route exact path="/login" component={Login}/>
                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/oficina" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/" component={Login}/>
            </Switch>
        </HashRouter>
    }
}

export default Won;