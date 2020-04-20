import React from 'react';
import { Layout, Row } from 'antd';
import { Card } from './Blocks';
import { Header } from './Blocks';

const { Footer, Content } = Layout;

const data = [
    {
        id: 2083492,
        pageURL: "https://pixabay.com/photos/cat-young-animal-curious-wildcat-2083492/",
        type: "photo",
        tags: "cat, young animal, curious",
        previewURL: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_150.jpg",
    },
    {
        id: 736877,
        pageURL: "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/",
        type: "photo",
        tags: "tree, cat, silhouette",
        previewURL: "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg"
    },
    {
        id: 1285634,
        pageURL: "https://pixabay.com/photos/cat-animal-cat-s-eyes-eyes-pet-1285634/",
        type: "photo",
        tags: "cat, animal, cat's eyes",
        previewURL: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_150.png"
    }
]

export const ProductList = () => {
    return (
        <Layout style={styles.layoutStyle}>
            <Header />
            <Content>
                <Row justify="space-around">
                    { data.map(card => (<Card card={ card } />)) }
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

const styles = {
    layoutStyle: {
        minHeight: '100vh'
    }
}


