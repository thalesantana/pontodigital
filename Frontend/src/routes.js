import {Switch, Route} from 'react-router-dom'

import Index from './pages/loguin'
import Cards from './pages/Cards'
import Create from './pages/Create'
import Details from './pages/Details'

function Routes(){
    return(
        <Switch> 
            <Route path="/" exact component={Index} />
            <Route path="/Cards" exact component={Cards} />
            <Route path="/Create" exact component={Create} />
            <Route path="/Details" exact component={Details} />
        </Switch>
    );
}

export default Routes;