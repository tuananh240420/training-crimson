import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Table, Space, Modal, Form, DatePicker, Select, Row, Col, Typography } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined, MinusOutlined, ExclamationOutlined, ZoomInOutlined, FormOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button/Button';
const Assets = () => {
    const { t } = useTranslation();
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const [openAssignForm, setOpenAssignForm] = useState(false);
    const [openReturnForm, setOpenReturnForm] = useState(false);
    const [openReturnConfirm, setOpenReturnConfirm] = useState(false);
    const hanldeCreateForm = () => {
        // TODO: do something
    };

    const hanldeAssignForm = () => {
        // TODO: do something
    };

    const hanldeReturnForm = () => {
        // TODO: do something
        setOpenReturnConfirm(true);
    };

    const hanldeConfirmReturnAsset = () => {};
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
                        <Button icon={<FormOutlined />} onClick={() => setOpenAssignForm(true)}>
                            {t('assignAssets')}
                        </Button>
                        <Modal title={t('assignAssets')} centered visible={openAssignForm} footer={null} width={1014} onCancel={() => setOpenAssignForm(false)}>
                            <Form style={{ width: '100%' }} className="flex-col justify-center text-center" layout="vertical" onFinish={hanldeAssignForm} autoComplete="off">
                                <Form.Item label={t('date')} name="date" style={{ width: '100%' }}>
                                    <DatePicker style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item label={t('recipientEmail')} name="recipientEmail" style={{ width: '100%' }}>
                                    <Input placeholder={t('recipientEmailPlaceholder')} />
                                </Form.Item>
                                <Form.Item label={t('deviceid')} name="deviceid" style={{ width: '100%' }}>
                                    <Input placeholder={t('deviceidPlaceholder')} suffix={<SearchOutlined />} />
                                </Form.Item>

                                <div className="info">
                                    <Row>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('owner')}</Typography.Title>
                                            <Typography.Text>Le Van Dat</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('mail')}</Typography.Title>
                                            <Typography.Text>abc@cde.com</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('phone')}</Typography.Title>
                                            <Typography.Text>18008198</Typography.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('deviceName')}</Typography.Title>
                                            <Typography.Text>Mac buc</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('deviceid')}</Typography.Title>
                                            <Typography.Text>123asd</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('date')}</Typography.Title>
                                            <Typography.Text>20/1/2022</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('owner')}</Typography.Title>
                                            <Typography.Text>CMC</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('status')}</Typography.Title>
                                            <Typography.Text>New</Typography.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('note')}</Typography.Title>
                                            <Typography.Text>Note not no n </Typography.Text>
                                        </Col>
                                    </Row>
                                </div>

                                <Form.Item className="btn-submit">
                                    <Button style={{ width: '254px' }} className="btn-save mt-6" onClick={() => setOpenAssignForm(false)}>
                                        {t('cancel')}
                                    </Button>
                                    <Button style={{ width: '254px' }} className="btn-save mt-6" type="primary" htmlType="submit">
                                        {t('submit')}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                        <Modal
                            width={350}
                            className="confirmation"
                            visible={openReturnConfirm}
                            onOk={hanldeConfirmReturnAsset}
                            onCancel={() => setOpenReturnConfirm(false)}
                            okText="Yes"
                        >
                            <div className="confirmation__icon">
                                <ExclamationOutlined />
                            </div>
                            <h3 className="confirmation__title">Confirm</h3>
                            <p className="confirmation__desc">Are you sure?</p>
                        </Modal>
                        <Button icon={<MinusOutlined />} onClick={() => setOpenReturnForm(true)}>
                            {t('returnAssets')}{' '}
                        </Button>
                        <Modal title={t('returnAssets')} centered visible={openReturnForm} footer={null} width={1014} onCancel={() => setOpenReturnForm(false)}>
                            <Form style={{ width: '100%' }} className="flex-col justify-center text-center" layout="vertical" onFinish={hanldeReturnForm} autoComplete="off">
                                <Form.Item label={t('date')} name="date" style={{ width: '100%' }}>
                                    <DatePicker style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item label={t('deviceid')} name="deviceid" style={{ width: '100%' }}>
                                    <Input placeholder={t('deviceidPlaceholder')} suffix={<SearchOutlined />} />
                                </Form.Item>

                                <div className="info">
                                    <Row>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('deviceName')}</Typography.Title>
                                            <Typography.Text>Mac buc</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('deviceid')}</Typography.Title>
                                            <Typography.Text>123asd</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('date')}</Typography.Title>
                                            <Typography.Text>20/1/2022</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('owner')}</Typography.Title>
                                            <Typography.Text>CMC</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('status')}</Typography.Title>
                                            <Typography.Text>New</Typography.Text>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('owner')}</Typography.Title>
                                            <Typography.Text>Le Van Dat</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('mail')}</Typography.Title>
                                            <Typography.Text>abc@cde.com</Typography.Text>
                                        </Col>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('phone')}</Typography.Title>
                                            <Typography.Text>18008198</Typography.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={48}>
                                            <Typography.Title level={5}>{t('note')}</Typography.Title>
                                            <Typography.Text>Note not no n </Typography.Text>
                                        </Col>
                                    </Row>
                                </div>

                                <Form.Item className="btn-submit">
                                    <Button style={{ width: '254px' }} className="btn-save mt-6" onClick={() => setOpenReturnForm(false)}>
                                        {t('cancel')}
                                    </Button>
                                    <Button style={{ width: '254px' }} className="btn-save mt-6" type="primary" htmlType="submit">
                                        {t('submit')}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                        <Button icon={<PlusOutlined />} onClick={() => setOpenCreateForm(true)}>
                            {t('addNew')}
                        </Button>
                        <Modal title={t('addNewAsset')} centered visible={openCreateForm} footer={null} width={1014} onCancel={() => setOpenCreateForm(false)}>
                            <Form style={{ width: '100%' }} className="flex-col justify-center text-center" layout="vertical" onFinish={hanldeCreateForm} autoComplete="off">
                                <Form.Item label={t('date')} name="date" style={{ width: '100%' }}>
                                    <DatePicker style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('deviceid')} name="deviceid" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Input placeholder={t('deviceidPlaceholder')} />
                                    </Form.Item>
                                    <Form.Item label={t('deviceName')} name="deviceName" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Input placeholder={t('deviceNamePlaceholder')} />
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('deviceType')} name="deviceType" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Select placeholder={t('deviceTypePlaceholder')}>
                                            <Select.Option value="device1">device 1</Select.Option>
                                            <Select.Option value="device2">device 2</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label={t('quantity')} name="quantity" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Input placeholder={t('quantityPlaceholder')} />
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item className="flex-row mb-0" style={{ gap: '24px' }}>
                                    <Form.Item label={t('owner')} name="owner" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Select placeholder={t('ownerPlaceholder')}>
                                            <Select.Option value="owner1=">owner 1</Select.Option>
                                            <Select.Option value="owner2">owner 2</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label={t('status')} name="status" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <Select placeholder={t('statusPlaceholder')}>
                                            <Select.Option value="status 1">status 1</Select.Option>
                                            <Select.Option value="status 2">status 2</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item label={t('note')} name="note">
                                    <Input.TextArea style={{ width: '100%', resize: 'none' }} />
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
