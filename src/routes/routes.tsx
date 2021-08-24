import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import { ContactRegistration } from '../pages/Form';
import { List } from '../pages/List';
import { ContactDetails } from './../pages/Detail';

export function Routes() {

  
  return(
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={List} />
          <Route path='/registration/:id' component={ContactRegistration} />
          <Route exact path='/registration' component={ContactRegistration} />
          <Route path='/contact/details' component={ContactDetails} />
        </Switch>
      </Router>
    </>
  )
}