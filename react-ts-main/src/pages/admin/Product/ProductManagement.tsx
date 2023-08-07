import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../../types/product';
import { Link } from 'react-router-dom'

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
}
interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

const ProductManagementPage = (props: IProps) => {
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a style={{ fontSize: '16px' }}>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img style={{ width: "200px" }} src={image} />,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/products/${record.id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button style={{ marginBottom: '20px' }} type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default ProductManagementPage