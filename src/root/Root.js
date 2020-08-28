import React from 'react'
import { Link, Route, Switch} from 'react-router-dom'

import Home from '../routes/home/Home'
import Adoption from '../routes/adoption/Adoption'

function Root() {
  return <div>
    <Link to ='/'>
    <h1>Petful</h1>
    </Link>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/adoption' component={Adoption} />
    </Switch>
  </div>
}

export default Root
