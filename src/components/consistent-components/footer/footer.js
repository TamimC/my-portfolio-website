import React from 'react'
import { Container, Col, Row , Image } from 'react-bootstrap';

const Footer = () =>{
    return(
    <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
            <div class="container">
                <div class="row">
                    
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget subscribe no-box">
                            <h5 class="widget-title">Tamim Technology<span></span></h5>
                            <p>Portfolio Website for Toronto-based software developer </p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                            <h5 class="widget-title">Navigation<span></span></h5>
                            <ul class="thumbnail-widget">
                                <li> <div class="thumb-content"><a href="#.">Resume</a></div></li>
                                <li> <div class="thumb-content"><a href="#.">Blog</a></div></li>
                                <li> <div class="thumb-content"><a href="#.">Projects</a></div></li>
                                <li> <div class="thumb-content"><a href="#.">Technology</a></div></li>
                                <li> <div class="thumb-content"><a href="#.">Contact</a></div></li> 
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-xs-12 col-sm-6 col-md-3">
                            <h5 class="widget-title">Social Media<span></span></h5>
                            <p>Follow/Connect with Me!</p>
                            <Row>
                                <a href = 'https://www.linkedin.com/in/tamim-chowdhury-a17844179/' >
                                    <Image className = "social-images" src = {require('./../../../images/social-media/github.png')}/> </a>
                                <a href = 'https://github.com/TamimC' >
                                    <Image className = "social-images" src = {require('./../../../images/social-media/linkedin.png')}/> </a>
                                <a href = 'https://www.youtube.com/channel/UCpSFUut4UmocJmZ4i9HtU3w' >
                                    <Image className = "social-images" src = {require('./../../../images/social-media/youtube.png')}/> </a>
                                <a href = 'https://twitter.com/tamimchowdhury_' >
                                    <Image className = "social-images" src = {require('./../../../images/social-media/twitter.png')}/> </a>
                            </Row>
                            
                    </div>
                    
                    <div class="col-xs-12 col-sm-6 col-md-3">  
                        <div class="widget no-box">
                            <h5 class="widget-title">Contact Me<span></span></h5>
                            <p><a href="mailto:TamimChowdhury@live.com" title="glorythemes">TamimChowdhury@live.com</a></p>
                            <ul class="social-footer2">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<div class="footer-copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <p>Copyright Tamim Technology © {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </div>
    </div>
</div>
</footer>
    );
}

export default Footer;