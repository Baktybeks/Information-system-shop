import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {
    setCategories,
    setProduct,
    setProducts,
    setReview,
    setUserProduct,
} from "../store/slices/allSlice"
import {preloader} from "../store/slices/preloaderSlice"

// GET

export const getProductsApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/product/`)
            dispatch(setProducts(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getCategoriesApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/category/`)
            dispatch(setCategories(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const getProductApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/product/${id}`)
            dispatch(setProduct(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getUserProductApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_product/user/${id}`)
            dispatch(setUserProduct(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

// POST

export const addProductApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/product/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addCategoryApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/category/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addUserProduct = (userId, productId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/user_product/', {userId, productId})
            if (data.status === 200) {
                alert('Вы успешно добавили')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getReviewApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/review/`)
            dispatch(setReview(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addReviewApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/review/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили отзыв')
            }
        } catch (e) {
            alert(e)
        }
    }
}

