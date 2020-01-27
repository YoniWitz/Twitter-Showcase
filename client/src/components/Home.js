import React from 'react'
import Media from 'react-bootstrap/Media'
import twittImage from '../assets/twitt.png'
import { Container } from 'react-bootstrap'

function Home() {
    let mediaStyle = {
        backgroundColor: "pink",
        fontFamily: "sans serif",
        marginTop:"20px"
    }

    let imageStyle = {
        width: "200px",
        height: "200px",
        marginTop: "1px",
        marginLeft: '1px'
      }

    return (
        <Media style={mediaStyle}>
            <Media.Body>
                <h1 style={{ color: 'blue', fontSize: '50px' }}>My Twitter Showcase</h1>
                <h3 style={{ color: 'green', margin: '5px' }}>
                    Allows user to search for Twitter tweets without being logged on to twitter.<br />
                    Written in Node, Express, React.js and deployed to Heroku
                </h3>
                <h5 style={{ color: 'brown', margin: '2px' }}>
                    If you enjoyed reviewing this website as much as I did writing it, please find me on one of the links provided below.
               </h5><br />
                <Container>
                    <a className="fab fa-1x" href="https://jonathan-hirshowitz-portfolio.firebaseapp.com/"> <b>Jonathan Hirshowitz</b> - <i>Full-Stack Software Developer</i></a><br />
                    <a className="fab fa-3x fa-linkedin" href="https://www.linkedin.com/in/jonathan-hirshowitz/"> &nbsp;&nbsp;</a>
                    <a className="fab fa-3x fa-github" href="https://github.com/yoniwitz"> </a>
                </Container>
            </Media.Body>

            <img  className="mr-3" style={imageStyle} 
                src={twittImage}
                alt="Generic placeholder"
            />
        </Media>
    )
}

export default Home