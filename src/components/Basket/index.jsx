import React, { useState } from 'react';
import { Layout, Card, Row, Col, Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Meta } = Card;
const data = [
    {
        id: 1,
        title: 'Iphone',
        price: 25500,
        image: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/3/c/3ca7aabff2212d386690746e4f259df9.jpg',
        count: 3,
        buyCount: 1
    },
    {
        id: 2,
        title: 'Ipad',
        price: 18450,
        image: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/1/0/104d8043d2b5fada4ab79311ca1c64a4.jpg',
        count: 3,
        buyCount: 1
    },
    {
        id: 3,
        title: 'Macbook',
        price: 40000,
        image: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/4/04d15e76ba5c1ea151906dac7196448c.jpg',
        count: 3,
        buyCount: 1
    }
];

export const Basket = () => {
    const [total, changeTotal] = useState(83950);
    const onChangeTotal = (product, sign) => {
        if (sign === 'add') {
            changeTotal(total + product.price);
            const value = data.find(item => item.id === product.id);
            value.count -= 1;
            value.buyCount += 1;

        } 
        if (sign === 'minus') {
            changeTotal(total - product.price);
            const value = data.find(item => item.id === product.id);
            value.count += 1;
            value.buyCount -= 1;
        }
    }
    return (
        <Layout>
            <Content>
            <div>Basket</div>
            <Row justify="space-around">
                { data.map(product => (
                    <Col span={ 4 }>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={ <img alt="example" src={ product.image } /> }
                        >
                            <Meta title={ product.title } />
                            <p>{ product.price }</p>
                            { product.count === 0 ?
                                (<Button icon = { <PlusCircleOutlined /> } type="dashed" />) :
                                (<Button type="primary" icon = { <PlusCircleOutlined /> } onClick = {() => onChangeTotal(product, 'add') }></Button>)}
                            <p>{ product.buyCount }</p>
                            { product.buyCount === 0 ?
                                (<Button icon = { <MinusCircleOutlined /> } type="dashed" />) :
                                (<Button type="primary" icon = { <MinusCircleOutlined /> } onClick = {() => onChangeTotal(product, 'minus') } />)}
                        </Card>
                    </Col>
                )) }
            </Row>
            <p>{ total }</p>
            </Content>
        </Layout>
        
    )
}