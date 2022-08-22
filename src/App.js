import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Capture from './pages/Capture';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/capture/:id' component={Capture}/>
                <Route exact path='/' component={Main}/>
                <Route component={NotFound404}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
