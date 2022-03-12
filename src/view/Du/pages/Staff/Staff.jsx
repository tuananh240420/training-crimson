import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Table, Space, Modal, Form, DatePicker, Select, Tag } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined, ExportOutlined, ZoomInOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button/Button';
const Staff = () => {
    const { t } = useTranslation();
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const hanldeCreateForm = () => {
        // TODO: do something
    };
    return (
        <div className=" page staff">
            <div className="page-content">
                <div className="content-header">
                    <div className="query-container">
                        <Input className="search-bar query-item" placeholder={t('search')} suffix={<SearchOutlined />} />
                        <Select className="query-item" placeholder={t('project')}>
                            <Select.Option value="project1">project 1</Select.Option>
                            <Select.Option value="project2">project 2</Select.Option>
                            <Select.Option value="project3">project 3</Select.Option>
                        </Select>
                        <Select className="query-item" placeholder={t('du')}>
                            <Select.Option value="du1">du 1</Select.Option>
                            <Select.Option value="du2">du 2</Select.Option>
                            <Select.Option value="du3">du 2</Select.Option>
                        </Select>
                        <Select className="query-item" placeholder={t('status')}>
                            <Select.Option value="status1">status 1</Select.Option>
                            <Select.Option value="status2">status 2</Select.Option>
                            <Select.Option value="status3">status 3</Select.Option>
                        </Select>
                        <Select className="query-item" placeholder={t('role')}>
                            <Select.Option value="role1">role 1</Select.Option>
                            <Select.Option value="role2">role 2</Select.Option>
                            <Select.Option value="role3">role 3</Select.Option>
                        </Select>
                    </div>

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
                        <Button icon={<ExportOutlined />}>{t('export')}</Button>
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
                                title: t('name'),
                                dataIndex: 'name',
                                sorter: (a, b) => a.name > b.name,
                                render: (text) => <a>{text}</a>,
                            },
                            {
                                title: t('team'),
                                dataIndex: 'team',
                                sorter: (a, b) => a.team > b.team,
                                render: (text) => <Tag color="volcano">{text}</Tag>,
                            },
                            {
                                title: t('employeeid'),
                                dataIndex: 'employeeid',
                                sorter: (a, b) => a.employeeid > b.employeeid,
                            },
                            {
                                title: t('gender'),
                                dataIndex: 'gender',
                                sorter: (a, b) => a.gender > b.gender,
                            },
                            {
                                title: t('role'),
                                dataIndex: 'role',
                                sorter: (a, b) => a.role > b.role,
                            },
                            {
                                title: t('mobile'),
                                dataIndex: 'mobile',
                                sorter: (a, b) => a.mobile > b.mobile,
                            },
                            {
                                title: t('dateOfBirth'),
                                dataIndex: 'dateOfBirth',
                                sorter: (a, b) => Date(a.dateOfBirth) > Date(b.dateOfBirth),
                            },
                            {
                                title: t('cmclead'),
                                dataIndex: 'cmclead',
                                sorter: (a, b) => a.cmclead > b.cmclead,
                            },
                            {
                                title: t('status'),
                                dataIndex: 'status',
                                sorter: (a, b) => a.status > b.status,
                                render: (text) => <Tag color={text === 'active' ? 'green' : ''}>{text}</Tag>,
                            },
                            {
                                title: t('onboard'),
                                dataIndex: 'onboard',
                                sorter: (a, b) => Date(a.onboard) - Date(b.onboard),
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
        team: 'CMC',
        employeeid: 'abc1',
        gender: 'Male',
        role: 'Leader',
        mobile: '1080',
        status: 'active',
        dateOfBirth: '30/1/1999',
        cmclead: 'asd',
        onboard: '07/03/2022',
    },
    {
        key: 2,
        name: 'Saigon',
        team: 'Thanh Cong',
        employeeid: 'abc1',
        gender: 'Male',
        role: 'Leader',
        mobile: '1080',
        status: 'active',
        dateOfBirth: '30/1/1999',
        cmclead: 'asd',
        onboard: '07/03/2022',
    },
    {
        key: 3,
        name: 'Hanoi',
        team: 'Viet A',
        employeeid: 'abc1',
        gender: 'Male',
        role: 'Leader',
        mobile: '1080',
        status: 'inactive',
        dateOfBirth: '30/1/1999',
        cmclead: 'asd',
        onboard: '07/03/2022',
    },
    {
        key: 4,
        name: 'Hanoi',
        team: 'Thanh Cong',
        employeeid: 'abc1',
        gender: 'Male',
        role: 'Leader',
        mobile: '1080',
        status: 'inactive',
        dateOfBirth: '30/1/1999',
        cmclead: 'asd',
        onboard: '07/03/2022',
    },
];

export default Staff;
