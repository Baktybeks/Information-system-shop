import React, {useState} from 'react'
import classes from "./addingProduct.module.css"
import {useDispatch, useSelector} from "react-redux"
import {addProductApi} from "../../axios/allApi"


function AddProduct() {

    const dispatch = useDispatch()

    const {user} = useSelector(state => state.userReducer)

    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const reset = () => {
        setImg('')
        setTitle('')
        setDescription('')
        setPrice('')
    }

    const isFormValid = () => title && description && price && img


    const submitAddCourses = async (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('img', img)

        dispatch(addProductApi(formData))
    }

    return (
        <section className={classes.adding_courses}>
            <div>
                <form className={classes.cont_dob_curs} onSubmit={submitAddCourses}>
                    <input
                        id="dob-cr"
                        className={classes.text}
                        type="text"
                        name="title"
                        placeholder="Название"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        id="dob-des"
                        className={classes.text}
                        type="text"
                        name="addDescription"
                        placeholder="Описание"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        id="dob-des2"
                        className={classes.text}
                        type="number"
                        name="price"
                        placeholder="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <label htmlFor="img">{!img ? "Добавить фото" : "Фото добавлено"}</label>
                    <input
                        type="file"
                        name="photo"
                        id="img"
                        accept="/image/*, .png, .jpg, .gif, .web"
                        onChange={e => setImg(e.target.files[0])}
                    />
                    <div className={classes.btns}>
                        <button className={classes.btn_dob_curs}
                                type="submit"
                        >
                            Загрузить
                        </button>
                        <button className={classes.btn_dob_curs}
                                onClick={reset}
                        >
                            Сбросить
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default AddProduct