import React from 'react';
import './Header.scss';
import { PageHeader, Avatar, Dropdown, Menu } from 'antd';
import Button from '../Button/Button';
import { BellOutlined, DownOutlined, UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/Logo.svg';
import { Outlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MENU_ITEMS } from '../../contants';
import { useAuthContext } from '../../auth/AuthContext';

const Header = () => {
    const { t } = useTranslation();
    const { setIsAuth } = useAuthContext();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className="header">
                <img className="header__logo" src={Logo} alt="Logo" />
                <PageHeader
                    ghost={false}
                    extra={MENU_ITEMS.map((item) => (
                        <Button
                            key={item}
                            className="header-btn"
                            size="large"
                            type={location.pathname === `/${item.toLocaleLowerCase()}` && 'primary'}
                            onClick={() => navigate(item.toLocaleLowerCase())}
                        >
                            {t(item)}
                        </Button>
                    ))}
                ></PageHeader>
                <div className="header__user">
                    <div className="notification">
                        <BellOutlined className="notification__icon" />
                        <span className="notification__counter">3</span>
                    </div>
                    <div className="user">
                        <Avatar className="user__avatar" />
                        <Dropdown
                            className="user__dropdown"
                            overlay={
                                <Menu>
                                    <Menu.Item key="0">
                                        <p>
                                            <UserOutlined />
                                            <span className="memnu-item-title-desc">{t('profile')}</span>
                                        </p>
                                    </Menu.Item>

                                    <Menu.Item key="1">
                                        <p>
                                            <LockOutlined />
                                            <span className="memnu-item-title-desc">{t('changePassword')}</span>
                                        </p>
                                    </Menu.Item>
                                    <Menu.Item key="3" onClick={() => setIsAuth(false)}>
                                        <p>
                                            <LoginOutlined />
                                            <span className="memnu-item-title-desc">{t('logout')}</span>
                                        </p>
                                    </Menu.Item>
                                </Menu>
                            }
                            trigger={['click']}
                            placement="bottomRight"
                        >
                            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                Tien Dat <DownOutlined className="user__dropdown-icon" />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

// [
//     <Button key="dashboard" className="header-btn" type="primary" size="large">
//         Dashboard
//     </Button>,
//     <Button key="Room" className="header-btn" size="large">
//         Room
//     </Button>,
//     <Button key="Report" className="header-btn" size="large">
//         Report
//     </Button>,
//     <Button key="User" className="header-btn" size="large">
//         User
//     </Button>,
//     <Button key="DU Managment" className="header-btn" size="large">
//         DU Managment
//     </Button>,
// ];

export default Header;
