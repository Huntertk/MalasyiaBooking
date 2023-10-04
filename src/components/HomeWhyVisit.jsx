import React from 'react'
import '../styles/homeWhyVisit.scss'

const HomeWhyVisit = () => {
  return (
    <section className='whyVisitMainComponents'>
        
        <h1>Why Visit Atmosphere 360?</h1>
        <div className="whyVisitCardContainer">
            <img src="https://cdn-imgix.headout.com/tour/37159/TOUR-IMAGE/24ed39d0-fbd4-436f-bfc2-8eda77e198d9-19082-kuala-lumpur-atmosphere-360-revolving-restaurant---lunch-buffet-07.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9" alt="" />
            <div className="listData">
                <ul>
                    <li>
                        <span>Unrivaled Dining Experience : </span>
                        Revel in a unique dining adventure as the restaurant gently rotates, offering a mesmerizing 360-degree view of Kuala Lumpur's skyline.
                    </li>
                    <li>
                        <span>Enchanting Ambiance : </span>
                        Immerse yourself in the ambiance of a spaceship-themed interior, creating a captivating and unforgettable atmosphere like dining among the stars.
                    </li>
                    <li>
                        <span>Gastronomic Delights : </span>
                        Indulge in a sumptuous Hi-Tea Buffet prepared by culinary experts, showcasing the best of Malay cuisine with premium ingredients.
                    </li>
                    <li>
                        <span>Panoramic Vistas : </span>
                        Witness breathtaking views of the city's skyline, an artist's dream canvas painted with city lights and architectural wonders.
                    </li>
                    <li>
                        <span>Perfect for Occasions : </span>
                        Celebrate love, special occasions, and social gatherings in an enchanting setting that guarantees cherished memories
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default HomeWhyVisit