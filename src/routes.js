import {
    HashRouter,
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';

import Chat from './pages/chat';
import Login from './pages/login';
import User from './pages/user';

function Routes(){
    return(
        <HashRouter>
        <Switch>

            <Route path="/" exact>
                <Redirect to="/chat" />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/chat">
                <Chat />
            </Route>
            <Route path="/user">
                <User />
            </Route>
        </Switch>
    </HashRouter>
    );

}

export default Routes;