import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Catalogo from '../pages/Catalogo.jsx';
import Login from '../pages/Login.jsx';
import Logout from '../pages/Logout.jsx';

class Won extends React.Component {
    render(){
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/oficina" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
                <Route exact path="/catalogo" component={Catalogo}/>
            </Switch>
        </BrowserRouter>
    }
}

export default Won;