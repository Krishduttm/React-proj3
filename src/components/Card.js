import React from "react"

export default function Card (props) {
    return(
        <div className = "Card-Div">
            <img src = {props.imageUrl}></img>
            <div className = "Card-info">
                <div className = "Card-info-firstline">
                    <img src = "./images/location-pin.png"></img>
                    <p className = "location">{props.location}</p>
                    <p className = "maps">View on Google Maps</p>
                </div>
            <h1>{props.title}</h1>
            <p className ="Card-info-date">{props.startDate} - {props.endDate}</p>
            <p className = "Card-info-para">{props.description}</p>
            </div>
            <hr />
        </div>
    )
}