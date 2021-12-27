import React, { Component } from 'react'
import Snow from './snowbg.mp4'


class Video extends Component {
    render() {
        return (
            <video autoPlay loop muted 
            style={{
                position: "fixed",
                width: "100vw",
                left: "50%",
                top: "50%",
                height: "100vh",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
                opacity: ".4"
            }}>
             
                <source src={Snow} type="video/mp4"/>
            </video>
        )
    }
}

export default Video
