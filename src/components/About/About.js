import React from 'react'
import Header from '../Header/Header'
import LeftMain from '../LeftMain/LeftMain'
import RightMain from '../RightMain/RightMain'
import NavBar from '../NavBar/NavBar'
import './about.css'

export default function About() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <div className='about'>
                <LeftMain/>
                <div className='aboutCont'>
                    <span className='au'>About Us</span>
                    <p className='mid'>Since 1970, the Denton Community Chorus has been striving to present quality choral music to the Denton community.
                            The Denton Community Chorus is supported in part by a grant from the Greater Denton Arts Council, The Arts Guild of Denton, the City of Denton, The Texas Commission on the Arts, The National Endowment for the Arts, and by members of this community.
                            Our mission is to educate the members in the art and technique of fine choral music and to offer this opportunity to all adults of the Greater Denton area, and to provide the community at large opportunities to experience fine choral music.
                            The Denton Community Chorus is open to all adults who would like to join. Come sing with us soon!</p>
                </div>  
                <RightMain/>
            </div>
        </div>
    )
}