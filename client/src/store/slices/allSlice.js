import {createSlice} from "@reduxjs/toolkit"

const allSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        userProduct: [],
        product: {},
        categories: [],
        review: [],
        selectedCategory: null

    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setUserProduct: (state, action) => {
            state.userProduct = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        },
    }
})

export const {
    setUserProduct,
    setSelectedCategory,
    setProducts,
    setProduct,
    setReview,
    setCategories,
} = allSlice.actions

export default allSlice.reducer