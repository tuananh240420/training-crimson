import React, { useState } from 'react';
import './Header.scss';
import { PageHeader, Avatar, Dropdown, Menu, Modal, Divider, Form, Input } from 'antd';
import Button from '../Button/Button';
import { BellOutlined, DownOutlined, UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/Logo.svg';
import { Outlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MENU_ITEMS } from '../../contants';
import { useAuthContext } from '../../auth/AuthContext';
import avatar from '../../assets/img/avatar.jpg';
const Header = () => {
    const { t } = useTranslation();
    const { setIsAuth } = useAuthContext();
    const location = useLocation();
    const navigate = useNavigate();

    const [openProfile, setOpenProfile] = useState(false);

    const hanldeSaveProfile = () => {
        // TODO: do something
    };

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
                                    <Menu.Item key="0" onClick={() => setOpenProfile(true)}>
                                        <p>
                                            <UserOutlined />
                                            <span className="memnu-item-title-desc">{t('profile')}</span>
                                        </p>
                                    </Menu.Item>
                                    <Modal title={t('viewProfile')} centered visible={openProfile} footer={null} width={526} onCancel={() => setOpenProfile(false)}>
                                        <Avatar src={avatar} size={154} />
                                        <Button className="mt-6 mb-6">{t('editAvatar')}</Button>
                                        <Divider />
                                        <Form
                                            style={{ width: '100%' }}
                                            className="flex-col justify-center text-center"
                                            layout="vertical"
                                            onFinish={hanldeSaveProfile}
                                            autoComplete="off"
                                        >
                                            <Form.Item
                                                label={t('name')}
                                                name="name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: t('nameMessage'),
                                                    },
                                                ]}
                                            >
                                                <Input className="inputEmail" placeholder={t('namePlaceholder')} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: t('emailMessage'),
                                                    },
                                                ]}
                                            >
                                                <Input className="inputEmail" placeholder={t('emailPlaceholder')} />
                                            </Form.Item>
                                            <Form.Item
                                                className="label-phone"
                                                label={t('phone')}
                                                name="phone"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: t('phoneMessage'),
                                                    },
                                                    {
                                                        pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                                        message: t('phoneMessage'),
                                                    },
                                                ]}
                                            >
                                                <Input className="input-phone" placeholder={t('phonePlaceholder')} />
                                            </Form.Item>

                                            <Form.Item className="btn-submit flex-col items-center">
                                                <Button style={{ width: '254px' }} className="btn-save mt-6" type="primary" htmlType="submit">
                                                    {t('save')}
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </Modal>

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

export default Header;
