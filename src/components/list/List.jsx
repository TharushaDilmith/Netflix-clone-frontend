import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"

export default function List() {
    const [slideNumber, setslideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false)

    const listRef  = useRef();

    const handleClick=(direction)=>{
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction==="left" && slideNumber>0){
            setslideNumber(slideNumber-1);
            listRef.current.style.transform =`translateX(${230 + distance}px)`
        }
        if(direction==="right" && slideNumber<4){
            setIsMoved(true);
            setslideNumber(slideNumber+1);
            listRef.current.style.transform =`translateX(${-230 + distance}px)`
        }
        console.log(slideNumber);
    }
    return (
        <div className="list">
            <span className="listTitle">Continue to Watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined style={{display : !isMoved && "none"}} className="sliderArrow left" onClick={()=>handleClick("left")}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}
