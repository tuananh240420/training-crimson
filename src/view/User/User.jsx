import React from 'react';
import './User.scss';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { Input, Table, Space } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
const Room = () => {
    const { t } = useTranslation();
    return (
        <div className="page user">
            <h1 className="page-title">{t('userList')}</h1>
            <div className="page-content">
                <div className="content-header">
                    <Input className="search-bar" placeholder={t('search')} suffix={<SearchOutlined />} />
                    <div className="control-btn">
                        <Button icon={<PlusOutlined />}>{t('addNew')}</Button>
                        <Button icon={<ReloadOutlined />}></Button>
                    </div>
                </div>
                <div className="content-main">
                    <Table
                        pagination={{ position: 'bottomRight' }}
                        tableLayout="fixed"
                        yScroll="enable"
                        columns={[
                            {
                                title: t('userName'),
                                dataIndex: 'name',
                                sorter: (a, b) => a.name > b.name,
                                render: (text) => <a>{text}</a>,
                            },
                            {
                                title: t('email'),
                                dataIndex: 'email',
                                sorter: (a, b) => a.location > b.location,
                            },
                            {
                                title: t('department'),
                                dataIndex: 'department',
                                sorter: (a, b) => a.status > b.status,
                                render: (text) => <span className={(text === 'Meeting' && 'text-danger') || (text === 'Blocked' && 'text-warning') || 'text'}>{text}</span>,
                            },
                            {
                                title: t('role'),
                                dataIndex: 'role',
                                sorter: (a, b) => a.capacity - b.capacity,
                            },
                            {
                                title: t('actions'),
                                key: 'actions',
                                sorter: true,
                                render: () => (
                                    <Space size="middle">
                                        <Button type="text" icon={<EditOutlined />}>
                                            {t('edit')}
                                        </Button>
                                        <Button type="text" icon={<DeleteOutlined />}>
                                            {t('delete')}
                                        </Button>
                                    </Space>
                                ),
                            },
                        ]}
                        dataSource={data}
                        scroll={scroll}
                    />
                </div>
            </div>
        </div>
    );
};

const data = [
    {
        key: 1,
        name: 'Danang',
        email: 'CMC',
        department: 'DU11',
        role: 'User',
    },
    {
        key: 2,
        name: 'Danang',
        email: 'CMC',
        department: 'DU11',
        role: 'Admin',
    },
    {
        key: 3,
        name: 'Danang',
        email: 'CMC',
        department: 'DU11',
        role: 'Admin',
    },
    {
        key: 4,
        name: 'Danang',
        email: 'CMC',
        department: 'DU11',
        role: 'User',
    },
];

export default Room;
