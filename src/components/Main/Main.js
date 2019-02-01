import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './main.css'
import Header from '../Header/Header'
import LeftMain from '../LeftMain/LeftMain'
import RightMain from '../RightMain/RightMain'
import homepic from '../../images/homePageDCC.jpg'
import NavBar from '../NavBar/NavBar'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div> 
                <Header/>
                <NavBar/>
                <div className='mainDisplay'>
                    <LeftMain/>
                    <img src={homepic} className='homepic'/>
                    <RightMain/>
                </div>
            </div>
        )
    }
}