import React from 'react'
import Items from "../../components/Items"
import Header from "../../components/header/Header"
import Reviews from "../../components/reviews/Reviews"

function MainPage(props) {
    return (
        <div>
            <Header/>
            <Items/>
            <Reviews/>

        </div>
    )
}

export default MainPage