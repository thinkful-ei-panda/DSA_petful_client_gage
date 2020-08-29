import React from 'react'
import { Link, Route, Switch} from 'react-router-dom'

import Home from '../routes/home/Home'
import Adoption from '../routes/adopt/Adopt'

function Root() {
  return <div>
    <div className="container">
    <Link to ='/'>
    <h1>Petful</h1>
    </Link>
    </div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/adoption' component={Adoption} />
    </Switch>
  </div>
}

export default Root
