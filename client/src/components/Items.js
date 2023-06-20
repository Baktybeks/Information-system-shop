import React, {useEffect} from 'react'
import Item from "./Item"
import {useDispatch, useSelector} from "react-redux"
import {getProductsApi} from "../axios/allApi"

function Items() {
    const dispatch = useDispatch()

  const {products} = useSelector(state => state.allReducer)
    console.log(products)

    useEffect(() => {
        dispatch(getProductsApi())
    }, [dispatch])

  return (
      <main>
        {products.map(item => (
            <Item item={item}/>
        ))}
      </main>
  )
}

export default Items