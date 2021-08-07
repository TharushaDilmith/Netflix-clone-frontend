import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import video from "../../video/video.mp4"
import "./watch.scss"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video src={video}  className="video" autoPlay onProgress controls />
            
        </div>
    )
}
