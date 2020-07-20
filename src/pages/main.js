import React from 'react';
import {Switch, Route} from 'react-router-dom'
import landingPage from './landingpage';
import AboutMe from './aboutme'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'
import Technology from './technology'

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {landingPage} />
        <Route path = "/aboutme" component = {AboutMe}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/projects" component = {Projects}/>
        <Route path = "/resume" component = {Resume}/>
        <Route path = "/technology" component = {Technology}/>
    </Switch>
)


export default Main;