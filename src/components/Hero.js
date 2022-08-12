import React from "react";
import airbnb_hero from "../images/hero-image.png";

export default function Navbar(){
    return(
        <section className="hero">
            <img src = {airbnb_hero} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities lead by
                one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
    )
}