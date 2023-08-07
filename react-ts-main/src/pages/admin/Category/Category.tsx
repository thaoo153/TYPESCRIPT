import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICate } from '../../../types/product';
import { Link } from 'react-router-dom'

interface DataType {
    key: string | number;
    id: number;
    name: string;
}
interface IProps {
    categories: ICate[],
    onRemove: (id: number) => void
}

const Category = (props: IProps) => {
    const removeCate = (id: number) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a style={{ fontSize: '16px' }}>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCate(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/category/${record.id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories.map((item: ICate) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button style={{ marginBottom: '20px' }} type='primary'><Link to={'/admin/category/add'}>Add New Category</Link></Button>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Category