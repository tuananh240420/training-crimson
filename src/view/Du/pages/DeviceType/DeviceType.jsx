import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Table, Space, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined, MinusOutlined, ZoomInOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button/Button';
const DeviceType = () => {
    const { t } = useTranslation();
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const hanldeCreateForm = () => {
        // TODO: do something
    };
    return (
        <div className=" page devicetype">
            <div className="page-content">
                <div className="content-header">
                    <div className="query-container">
                        <Input className="search-bar query-item" placeholder={t('search')} suffix={<SearchOutlined />} />
                        <Select className="query-item" placeholder={t('assetType')}>
                            <Select.Option value="assetType1">assetType 1</Select.Option>
                            <Select.Option value="assetType2">assetType 2</Select.Option>
                            <Select.Option value="assetType3">assetType 3</Select.Option>
                        </Select>
                    </div>

                    <div className="control-btn">
                        <Button icon={<MinusOutlined />}>{t('returnAssets')}</Button>

                        <Button icon={<PlusOutlined />} onClick={() => setOpenCreateForm(true)}>
                            {t('create')}
                        </Button>
                        <Modal title={t('createDevice')} centered visible={openCreateForm} footer={null} width={1014} onCancel={() => setOpenCreateForm(false)}>
                            <Form style={{ width: '100%' }} className="flex-col justify-center text-center" layout="vertical" onFinish={hanldeCreateForm} autoComplete="off">
                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('deviceName')} name="deviceName" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Input placeholder={t('deviceNamePlaceholder')} />
                                    </Form.Item>
                                    <Form.Item label={t('deviceCode')} name="deviceCode" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Input placeholder={t('deviceCodePlaceholder')} />
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('deviceType')} name="deviceType" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Select placeholder={t('deviceTypePlaceholder')}>
                                            <Select.Option value="device1">device 1</Select.Option>
                                            <Select.Option value="device2">device 2</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label={t('status')} name="status" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Select placeholder={t('statusPlaceholder')}>
                                            <Select.Option value="status 1">status 1</Select.Option>
                                            <Select.Option value="status 2">status 2</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('owner')} name="owner" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Select placeholder={t('ownerPlaceholder')}>
                                            <Select.Option value="owner1=">owner 1</Select.Option>
                                            <Select.Option value="owner2">owner 2</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label={t('quantity')} name="quantity" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Input placeholder={t('quantityPlaceholder')} />
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('date')} name="date" style={{ display: 'inline-block', width: 'calc(50% - 12px)', alignSelf: 'stretch' }}>
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                    <Form.Item label={t('note')} name="note" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Input.TextArea style={{ width: '100%', resize: 'none' }} />
                                    </Form.Item>
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
                                title: t('assetType'),
                                dataIndex: 'assetType',
                                sorter: (a, b) => a.assetType > b.assetType,
                            },

                            {
                                title: t('brand'),
                                dataIndex: 'brand',
                                sorter: (a, b) => a.brand > b.brand,
                            },

                            {
                                title: t('receivedDate'),
                                dataIndex: 'receivedDate',
                                sorter: (a, b) => Date(a.receivedDate) > Date(b.receivedDate),
                            },
                            {
                                title: t('receivedDate'),
                                dataIndex: 'receivedDate',
                                sorter: (a, b) => Date(a.receivedDate) > Date(b.receivedDate),
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
        assetType: 'Leader',
        quantity: '1080',
        status: 'new',
        brand: 'asd',
        receivedDate: '07/03/2022',
    },
    {
        key: 2,
        name: 'Saigon',
        code: 'Thanh Cong',
        deviceName: 'abc1',
        gender: 'Male',
        assetType: 'Leader',
        quantity: '1080',
        status: 'new',
        brand: 'asd',
        receivedDate: '07/03/2022',
    },
    {
        key: 3,
        name: 'Hanoi',
        code: 'Viet A',
        deviceName: 'abc1',
        gender: 'Male',
        assetType: 'Leader',
        quantity: '1080',
        status: 'new',
        brand: 'asd',
        receivedDate: '07/03/2022',
    },
    {
        key: 4,
        name: 'Hanoi',
        code: 'Thanh Cong',
        deviceName: 'abc1',
        gender: 'Male',
        assetType: 'Leader',
        quantity: '1080',
        status: 'new',
        brand: 'asd',
        receivedDate: '07/03/2022',
    },
];

export default DeviceType;
