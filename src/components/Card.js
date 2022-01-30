import React from "react";

function Card(props) {
    // const [title, location, googleMapsUrl, startDate, endDate, description, imageUrl] = props

    return (
        <article className="entry">
            <img src={props.imageUrl} alt="" className="entry__image" />
            <div className="entry__details">
                <div className="entry__location">
                    <img src="./assets/img/pin.png" alt="pin" />
                    <p>{props.location} <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
                </div>
                <h1 className="entry__title">{props.title}</h1>

                <p className="entry__date">{props.startDate} -  {props.endDate}</p>
                <p className="entry__description">
                    {props.description}
                </p>
            </div>
            <hr />
        </article>
    )
}

export default Card