import React from 'react';
import Button from '../../components/Button/Button';
import { PlusOutlined, ReloadOutlined, DownOutlined, UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dashboard.scss';
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

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const times = ['Date', 'Month', 'Year'];

const Dashboard = () => {
    const query = useQuery();
    console.log(query.get('time'));
    const navigate = useNavigate();
    return (
        <div className="dashboard">
            <h1 className="dashboard__title">Dashboard</h1>
            <div className="dashboard__content">
                <header className="content__header">
                    <div className="time-btn-group">
                        {times.map((time) => (
                            <Button key={time} onClick={() => navigate(`?time=${time}`)} type={query.get('time') === time && 'primary'}>
                                {time}
                            </Button>
                        ))}
                    </div>
                    <div className="control-group">
                        <Button type="default" icon={<PlusOutlined />}>
                            Create
                        </Button>
                        <Dropdown className="dashboard__dropdown" overlay={menu} trigger={['click']} placement="bottomLeft">
                            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                Sai gon <DownOutlined className="" />
                            </a>
                        </Dropdown>
                        <Button shape="circle" icon={<ReloadOutlined />}></Button>
                    </div>
                </header>
                <footer className="content__footer">Total: 120 item</footer>
            </div>
        </div>
    );
};

export default Dashboard;
