import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context'

const Filters = () => {

    const {
        productState: { byFastDelivery, sort },
        productDispatch
    } = CartState();

    return (
        <>
            <div className='filters'>
                <span className='title'>Filter Products</span>
                <span>
                    <Form.Check
                        inline
                        label="Ascending"
                        name="group1"
                        type="radio"
                        id={'inline-1'}
                        onChange={() =>
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh"
                            })
                        }
                        checked={sort === "lowtoHigh" ? true : false}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Descending"
                        name="group1"
                        type="radio"
                        id={'inline-2'}
                        onChange={() =>
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow"
                            })
                        }
                        checked={sort === "highToLow" ? true : false}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Fast Delivery only"
                        name="group1"
                        type="checkbox"
                        id={'inline-3'}
                        onChange={() =>
                            productDispatch({
                                type: "FILTER_BY_DELIVERY",
                            })
                        }
                        checked={byFastDelivery}
                    />
                </span>
                <Button
                    variant='light'
                    onClick={() =>
                        productDispatch({
                            type: "CLEAR_FILTERS",
                        })
                    }
                >
                    Clear Filters</Button>
            </div>
        </>
    )
}

export default Filters