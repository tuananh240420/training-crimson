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
                                title: t('roomName'),
                                dataIndex: 'name',
                                sorter: (a, b) => a.name > b.name,
                                render: (text) => <a>{text}</a>,
                            },
                            {
                                title: t('location'),
                                dataIndex: 'location',
                                sorter: (a, b) => a.location > b.location,
                            },
                            {
                                title: t('status'),
                                dataIndex: 'status',
                                sorter: (a, b) => a.status > b.status,
                                render: (text) => <span className={(text === 'Meeting' && 'text-danger') || (text === 'Blocked' && 'text-warning') || 'text'}>{text}</span>,
                            },
                            {
                                title: t('capacity'),
                                dataIndex: 'capacity',
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
        location: 'CMC',
        status: 'Empty',
        capacity: 20,
    },
    {
        key: 2,
        name: 'Saigon',
        location: 'Thanh Cong',
        status: 'Meeting',
        capacity: 50,
    },
    {
        key: 3,
        name: 'Hanoi',
        location: 'Viet A',
        status: 'Blocked',
        capacity: 30,
    },
    {
        key: 4,
        name: 'Hanoi',
        location: 'Thanh Cong',
        status: 'Empty',
        capacity: 10,
    },
];

export default Room;
