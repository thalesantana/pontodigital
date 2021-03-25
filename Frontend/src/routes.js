import {Switch, Route} from 'react-router-dom'


import Login from './pages/loguin'
import Cards from './pages/Cards'
import Create from './pages/Create'
import Details from './pages/Details'
import Edit from './pages/Edit'

function Routes(){
    return(
        <Switch> 
            <Route path="/login" exact component={Login} />
            <Route path="/Create" exact component={Create} />
            <Route path="/Workers" exact component={Cards} />
            <Route path="/worker/:id" exact component={Details} />
            <Route path="/worker/edit/:id" exact component={Edit} />
        </Switch>
    );
}

export default Routes;