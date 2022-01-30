import React from "react";

function Card() {
    return (
        <div className="journal">
            <article className="entry">
                <img src="./assets/img/fiji.jpg" alt="" className="entry__image" />
                <div className="entry__details">
                    <div className="entry__location">
                        <img src="./assets/img/pin.png" alt="pin" />
                        <p>Japan <a href="google.com" target="_blank"
                        >View on Google Maps</a></p>
                    </div>
                    <h1 className="entry__title">Mount Fiji</h1>
                    <p className="entry__date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="entry__decription">
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Card