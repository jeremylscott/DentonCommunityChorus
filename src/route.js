import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Main from './components/Main/Main'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Donate from './components/Donate/Donate'
import Join from './components/Join/Join'
import Upcoming from './components/Upcoming/Upcoming'

export default (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/donate' component={Donate}/>
        <Route path='/join' component={Join}/>
        <Route path='/upcoming' component={Upcoming}/>
    </Switch>


)