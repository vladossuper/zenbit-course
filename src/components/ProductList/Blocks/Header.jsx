import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header:HeaderComponent } = Layout;
const { Item } = Menu;

export const Header = () => {
    return (
    <HeaderComponent style = { styles.header }>
        <Menu theme="dark" mode="horizontal">
            <Item>
                <Link to="/details">Details</Link>
            </Item>
            <Item>
                <Link to="/basket">Basket</Link>
            </Item>
        </Menu>
    </HeaderComponent>
    )
}

const styles = {
    header: {
        color: '#fff'
    }
}