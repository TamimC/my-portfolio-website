import React, {Component} from 'react'
import IntroJumbotron from '../components/landing-page-components/IntroJumbotron'
import ServiceJumbotron from '../components/landing-page-components/serviceContainer/serviceContainer'


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