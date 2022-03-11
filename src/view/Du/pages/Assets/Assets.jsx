import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Table, Space, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined, MinusOutlined, ZoomInOutlined, FormOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button/Button';
const Assets = () => {
    const { t } = useTranslation();
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const hanldeCreateForm = () => {
        // TODO: do something
    };
    return (
        <div className=" page assets">
            <div className="page-content">
                <div className="content-header">
                    <div className="query-container">
                        <Input className="search-bar query-item" placeholder={t('search')} suffix={<SearchOutlined />} />
                        <Select className="query-item" placeholder={t('device')}>
                            <Select.Option value="device1">device 1</Select.Option>
                            <Select.Option value="device2">device 2</Select.Option>
                            <Select.Option value="device3">device 3</Select.Option>
                        </Select>
                        <DatePicker placeholder={t('dateProvidedPlaceholder')} className="query-item" />
                        <DatePicker placeholder={t('dateHandOverPlaceholder')} className="query-item" />
                    </div>

                    <div className="control-btn">
                        <Button icon={<FormOutlined />}>{t('assignAssets')}</Button>
                        <Button icon={<MinusOutlined />}>{t('returnAssets')}</Button>

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
                                title: t('code'),
                                dataIndex: 'code',
                                sorter: (a, b) => a.code > b.code,
                            },
                            {
                                title: t('deviceName'),
                                dataIndex: 'name',
                                sorter: (a, b) => a.deviceName > b.deviceName,
                                render: (text) => <a>{text}</a>,
                            },
                            {
                                title: t('quantity'),
                                dataIndex: 'quantity',
                                sorter: (a, b) => a.quantity > b.quantity,
                            },

                            {
                                title: t('status'),
                                dataIndex: 'status',
                                sorter: (a, b) => a.status > b.status,
                            },
                            {
                                title: t('owner'),
                                dataIndex: 'owner',
                                sorter: (a, b) => a.owner > b.owner,
                            },
                            {
                                title: t('note'),
                                dataIndex: 'note',
                            },
                            {
                                title: t('updateDate'),
                                dataIndex: 'updateDate',
                                sorter: (a, b) => Date(a.updateDate) > Date(b.updateDate),
                            },
                            {
                                title: t('actions'),
                                key: 'actions',
                                sorter: true,
                                render: () => (
                                    <Space size="middle">
                                        <Button type="text" icon={<ZoomInOutlined />}></Button>
                                        <Button type="text" icon={<EditOutlined />}></Button>
                                        <Button type="text" icon={<DeleteOutlined />}></Button>
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
        code: 'CMC',
        deviceName: 'abc1',
        gender: 'Male',
        role: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        updateDate: '07/03/2022',
    },
    {
        key: 2,
        name: 'Saigon',
        code: 'Thanh Cong',
        deviceName: 'abc1',
        gender: 'Male',
        role: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        updateDate: '07/03/2022',
    },
    {
        key: 3,
        name: 'Hanoi',
        code: 'Viet A',
        deviceName: 'abc1',
        gender: 'Male',
        role: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        updateDate: '07/03/2022',
    },
    {
        key: 4,
        name: 'Hanoi',
        code: 'Thanh Cong',
        deviceName: 'abc1',
        gender: 'Male',
        role: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        updateDate: '07/03/2022',
    },
];

export default Assets;