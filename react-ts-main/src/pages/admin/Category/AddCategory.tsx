import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ICate, IProduct } from '../../../types/product'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
    onAdd: (cate: ICate) => void
}

const AddCategory = (props: IProps) => {

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/category')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 100 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input category name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 15 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCategory