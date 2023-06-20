import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import {links} from "../../links/links"
import {setIsAuth} from "../../store/slices/userSlice"

export default function Header(props) {


    const {isAuth, user} = useSelector(state => state.userReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }
    const isAdmin = () => {
        navigate(links.admin)
    }

    const base = () => {
        navigate(links.base)
    }

    const logOut = () => {
        dispatch(setIsAuth(false))
    }

    return (
        <header>
            <div>
                <span onClick={base}
                    className="logo">House Staff</span>

                <ul className="nav">
                    {isAuth
                        ?
                        <>
                            <li>
                                <button
                                    className="btn_header"
                                    onClick={userCabinet}>Кабинет</button>
                            </li>
                            {user.role === "ADMIN"
                                ?
                                <button
                                    className="btn_header"
                                    onClick={isAdmin}>Admin</button>
                                :
                                ''
                            }
                            <li>
                                <button
                                    className="btn_header"
                                    onClick={logOut}>Выход</button>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link  to={links.signup}>Регистрация</Link>
                            </li>
                            <li>
                                <Link  to={links.login}>Вход</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}
