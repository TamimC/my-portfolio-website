import React from 'react'
import {Container, Row, Image} from 'react-bootstrap'

const CustomGliderItem = (props) =>{
    return(
        <div className = "fit-well">
            <Image src = {props.image} className = "smallImages" />
            <p> {props.description} </p>.
        </div>
    )
}

export default CustomGliderItem;