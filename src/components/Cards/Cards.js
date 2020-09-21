import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this epic destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="/images/patrick-weissenberger-f0t9_OOgKoo-unsplash-min.jpg"
                            text="Behold the towering waterfalls and breathtaking sheer mountains of Fiordland"
                            label="Milford Sound"
                            path="/services"
                        />
                        <CardItem 
                            src="/images/rashel-ochoa-oaU-E83yRPw-unsplash-min.jpg"
                            text="The Otago high country will leave you breathless, regardless of how you get to the top"
                            label="Otago High Country"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
