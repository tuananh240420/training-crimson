import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Table, Space, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined, ZoomInOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button/Button';
const Project = () => {
    const { t } = useTranslation();
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const hanldeCreateForm = () => {
        // TODO: do something
    };
    return (
        <div className=" page project">
            <div className="page-content">
                <div className="content-header">
                    <div className="query-container">
                        <Input className="search-bar query-item" placeholder={t('search')} suffix={<SearchOutlined />} />
                    </div>

                    <div className="control-btn">
                        <Button icon={<PlusOutlined />} onClick={() => setOpenCreateForm(true)}>
                            {t('create')}
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
                                title: t('projectName'),
                                dataIndex: 'projectName',
                                sorter: (a, b) => a.projectName > b.projectName,
                            },
                            {
                                title: t('leader'),
                                dataIndex: 'leader',
                                sorter: (a, b) => a.leader > b.leader,
                                render: (text) => <a>{text}</a>,
                            },
                            {
                                title: t('description'),
                                dataIndex: 'description',
                                sorter: (a, b) => a.description > b.description,
                            },
                            {
                                title: t('startDay'),
                                dataIndex: 'startDay',
                                sorter: (a, b) => Date(a.startDay) > Date(b.startDay),
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
        description: 'CMC',
        projectName: 'abc1',
        gender: 'Male',
        leader: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        startDay: '07/03/2022',
    },
    {
        key: 2,
        name: 'Saigon',
        description: 'Thanh Cong',
        projectName: 'abc1',
        gender: 'Male',
        leader: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        startDay: '07/03/2022',
    },
    {
        key: 3,
        name: 'Hanoi',
        description: 'Viet A',
        projectName: 'abc1',
        gender: 'Male',
        leader: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        startDay: '07/03/2022',
    },
    {
        key: 4,
        name: 'Hanoi',
        description: 'Thanh Cong',
        projectName: 'abc1',
        gender: 'Male',
        leader: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        startDay: '07/03/2022',
    },
];

export default Project;
