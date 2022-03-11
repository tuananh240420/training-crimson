import React, { useState } from 'react';
import './Room.scss';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { Input, Table, Space, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
const Room = () => {
    const { t } = useTranslation();
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const hanldeCreateForm = () => {
        // TODO: do something
    };
    return (
        <div className="page room">
            <h1 className="page-title">{t('roomlist')}</h1>
            <div className="page-content">
                <div className="content-header">
                    <Input className="search-bar" placeholder={t('search')} suffix={<SearchOutlined />} />
                    <div className="control-btn">
                        <Button icon={<PlusOutlined />} onClick={() => setOpenCreateForm(true)}>
                            {t('addNew')}
                        </Button>
                        <Modal title={t('createAppointment')} centered visible={openCreateForm} footer={null} width={526} onCancel={() => setOpenCreateForm(false)}>
                            <Form style={{ width: '100%' }} className="flex-col justify-center text-center" layout="vertical" onFinish={hanldeCreateForm} autoComplete="off">
                                <Form.Item label={t('title')} name="title">
                                    <Input placeholder={t('titlePlaceholder')} />
                                </Form.Item>
                                <Form.Item style={{ width: '100%' }} label={t('date')} name="date">
                                    <DatePicker style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('from')} name="dateFrom" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                    <Form.Item label={t('to')} name="dateTo" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item name="selectRoom" label={t('room')} hasFeedback rules={[{ required: true, message: t('roomSelectMessage') }]}>
                                    <Select placeholder={t('roomPlaceholder')}></Select>
                                </Form.Item>
                                <Form.Item style={{ width: '100%' }} label={t('member')}>
                                    <Input.TextArea style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item label={t('content')}>
                                    <Input.TextArea />
                                </Form.Item>

                                <Form.Item className="btn-submit">
                                    <Button style={{ width: '254px' }} className="btn-save mt-6" type="primary" htmlType="submit">
                                        {t('submit')}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
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
