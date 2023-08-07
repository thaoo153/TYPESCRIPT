import React, { useEffect, useState } from 'react'
import "../components/css.css";
import "./"
import { IProduct } from '../types/product'
import { Footer, Header } from '../components'
interface IProps { // định nghĩa kiểu dữ liệu cho props truyền vào component
    products: IProduct[], // định nghĩa kiểu dữ liệu cho mảng products 
    onRemove: (id: number) => void // định nghĩa kiểu dữ liệu cho hàm onRemove
}

const ProductPage = (props: IProps) => { // khai báo kiểu dữ liệu cho props
    const [data, setData] = useState<IProduct[]>([]) //khởi taọ state data với kiểu dữ liệu của data là mảng IProduct
    useEffect(() => {
        setData(props.products)
    }, [props])

    function removeProduct(id: number) {
        // console.log(id);
        props.onRemove(id)
    }
    return (
        <div>
            <Header />
            <div className='container'>
                <h1 className='center'>Product</h1>
                <div className="box">
                    {data.map((value, index) => {
                        return (
                            <div key={value.id} style={{ marginBottom: '40px' }}>
                                <div className="card" style={{ width: "15rem", }}>
                                    <img style={{ height: "200px" }} src={value.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">{value.name}</h4>
                                        <p className="card-text price"><span>{value.price}đ</span></p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default ProductPage