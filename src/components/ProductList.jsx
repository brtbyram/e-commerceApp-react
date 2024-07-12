import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'


export default function ProductList() {

    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    console.log(products)

    return (
        <div>ProductList</div>
    )
}
