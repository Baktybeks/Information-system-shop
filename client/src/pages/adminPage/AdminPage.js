import React from 'react'
import classes from "./adminPage.module.css"
import {useSelector} from "react-redux"
import HeaderUser from "../../components/header/HeaderUser"
import AddProduct from "../../components/addProduct/AddProduct"

function AdminPage() {

    const {users} = useSelector(state => state.userReducer)
    console.log(users)

    return (
        <div className={classes.container_content}>
            <HeaderUser/>
            <AddProduct/>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Логин</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {users.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.login}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPage