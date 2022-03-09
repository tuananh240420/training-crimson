import React from 'react';
import './Header.scss';
import { PageHeader, Avatar, Dropdown, Menu } from 'antd';
import Button from '../../components/Button/Button';
import { BellOutlined, DownOutlined, UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/Logo.svg';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">
                <UserOutlined />
                <span className="memnu-item-title-desc">Profile</span>
            </a>
        </Menu.Item>

        <Menu.Item key="1">
            <a href="#">
                <LockOutlined />
                <span className="memnu-item-title-desc">Change Password</span>
            </a>
        </Menu.Item>
        <Menu.Item key="3">
            <a href="#">
                <LoginOutlined />
                <span className="memnu-item-title-desc">Logout</span>
            </a>
        </Menu.Item>
    </Menu>
);

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="Logo" />
            <PageHeader
                ghost={false}
                extra={[
                    <Button key="dashboard" className="header-btn" type="primary" size="large">
                        Dashboard
                    </Button>,
                    <Button key="dashboard" className="header-btn" size="large">
                        Room
                    </Button>,
                    <Button key="dashboard" className="header-btn" size="large">
                        Report
                    </Button>,
                    <Button key="dashboard" className="header-btn" size="large">
                        User
                    </Button>,
                    <Button key="dashboard" className="header-btn" size="large">
                        DU Managment
                    </Button>,
                ]}
            ></PageHeader>
            <div className="header__user">
                <div className="notification">
                    <BellOutlined className="notification__icon" />
                    <span className="notification__counter">3</span>
                </div>
                <div className="user">
                    <Avatar className="user__avatar" />
                    <Dropdown className="user__dropdown" overlay={menu} trigger={['click']} placement="bottomRight">
                        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                            Tien Dat <DownOutlined className="user__dropdown-icon" />
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Header;
