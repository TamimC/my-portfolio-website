import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import IntroJumbotron from './../components/IntroJumbotron'
import ServiceJumbotron from './../components/serviceContainer/serviceContainer'


class landingPage extends Component {
    render(){
        return(
            <div>
                <IntroJumbotron/>
                <ServiceJumbotron/>
            </div>
        );
    }
}

export default landingPage;