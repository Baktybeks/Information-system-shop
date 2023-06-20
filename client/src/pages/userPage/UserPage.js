import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate, useParams} from "react-router-dom"
import {getUserProductApi} from "../../axios/allApi"
import HeaderUser from "../../components/header/HeaderUser"

function UserPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()
    console.log(id)

    const {userProduct} = useSelector(state => state.allReducer)
    console.log("userProduct", userProduct)

    useEffect(() => {
        dispatch(getUserProductApi(id))
    }, [dispatch, id])


    return (
        <div className={classes.container_content}>
        <HeaderUser/>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>ваши продукты</h2>
                </div>
                <div className={classes.block_tarif}>
                    <div className={classes.cart_tarif}>
                        <h1>Пользователи</h1>
                        <table className={classes.table}>
                            <thead>
                            <tr>
                                <th>title</th>
                                <th>description</th>
                                <th>price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userProduct.map(item => (
                                <tr key={item.id}>
                                    <td>{item.product.title}</td>
                                    <td>{item.product.description}</td>
                                    <td>{item.product.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserPage