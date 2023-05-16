import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';
import { productReducer } from './Reducer';


const Cart = createContext();
const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url('https://loremflickr.com/640/480?lock=1234'),
        fastDelivery: faker.datatype.boolean(),
    }))
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byFastDelivery: false,
        searchQuery: "",
    })
    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}