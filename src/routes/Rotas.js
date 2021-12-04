import{BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from '../components/pages/Home'
import ListPage from '../components/pages/ListPage'



function Rotas () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/lista" component={ListPage}/>
                
            </Switch>
        </BrowserRouter>
    )

}

export default Rotas