import React , {Component} from 'react';
import {Switch,Route} from 'react-router-dom'; 

import Home from './Components/Home'
import Profile from './Components/Profile'
import Layout from './Components/Layout'
import Projects from './Components/Projects'
import Hobby from './Components/Hobby'
import NotFound from './Components/Errors/404'
import Resume from './Components/Resume'

class App extends Component {

  render() {
    return (
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile} />
            <Route path='/projects' component={Projects}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/hobby' component={Hobby}/>
            <Route path='/404' component={NotFound}/>
          </Switch>
        </Layout>   
    )
  }
}

export default App