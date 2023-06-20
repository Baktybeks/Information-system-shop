import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {addUserProduct} from "../axios/allApi"

function Item({item}) {



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {isAuth, user} = useSelector(state => state.userReducer)

    console.log("user", user, "item.id", item.id)


    const order = () => {
        if (!isAuth) {
            return alert("Авторизуйтесь")
        }
    dispatch(addUserProduct(user.id,item.id))
    }

    return (
        <div className="item">
            <img src={process.env.REACT_APP_API_URL + item.img}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>{item.price}</b>
            <button className="order_btn" onClick={order}>Заказать</button>
        </div>
    )
}

export default Item