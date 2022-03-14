import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Table, Space, Modal, Col, Avatar, Typography, Divider, Row } from 'antd';
import { PlusOutlined, ReloadOutlined, SearchOutlined, DeleteOutlined, EditOutlined, ZoomInOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button/Button';
import avatar from '../../../../assets/img/avatar.jpg';
const Owner = () => {
    const { t } = useTranslation();
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const hanldeCreateForm = () => {
        // TODO: do something
    };
    return (
        <div className=" page owner">
            <div className="page-content">
                <div className="content-header">
                    <div className="query-container">
                        <Input className="search-bar query-item" placeholder={t('search')} suffix={<SearchOutlined />} />
                    </div>

                    <div className="control-btn">
                        <Button icon={<PlusOutlined />} onClick={() => setOpenCreateForm(true)}>
                            {t('addNew')}
                        </Button>
                        <Modal
                            className="view-user-details-modal"
                            title={t('viewUserDetail')}
                            centered
                            visible={openCreateForm}
                            footer={null}
                            width={1014}
                            onCancel={() => setOpenCreateForm(false)}
                        >
                            <div className="user_avatar">
                                <Avatar src={avatar} />
                                <Typography.Link href="mailto:abcd@cdef.com" target="_blank">
                                    abcd@cdef.com
                                </Typography.Link>
                            </div>
                            <Divider type="vertical" />
                            <div className="user">
                                <div className="user__info">
                                    <Typography.Title className="user__title" level={4}>
                                        {t('infomationUser')}
                                    </Typography.Title>
                                    <Row>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('name')}</Typography.Title>
                                            <Typography.Text>Le Van Dat</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('mail')}</Typography.Title>
                                            <Typography.Text>abcd#@asd.com</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('phone')}</Typography.Title>
                                            <Typography.Text>12381093</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('dateOfBirth')}</Typography.Title>
                                            <Typography.Text>23/21/1992</Typography.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('umid')}</Typography.Title>
                                            <Typography.Text>umid</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('employeeid')}</Typography.Title>
                                            <Typography.Text>123</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('role')}</Typography.Title>
                                            <Typography.Text>Leader</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('onboard')}</Typography.Title>
                                            <Typography.Text>23/12/22</Typography.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('project')}</Typography.Title>
                                            <Typography.Text>asd</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('du')}</Typography.Title>
                                            <Typography.Text>DU 11</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('cmclead')}</Typography.Title>
                                            <Typography.Text>Le Van Dat</Typography.Text>
                                        </Col>
                                        <Col span={6}>
                                            <Typography.Title level={5}>{t('status')}</Typography.Title>
                                            <Typography.Text>status 1</Typography.Text>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="user__device">
                                    <Typography.Title className="user__title" level={4}>
                                        {t('infomationDevice')}
                                    </Typography.Title>
                                    <div className="device">
                                        <Row>
                                            <Col span={6}>
                                                <Typography.Title level={5}>{t('deviceName')}</Typography.Title>
                                                <Typography.Text>Mac buc</Typography.Text>
                                            </Col>
                                            <Col span={6}>
                                                <Typography.Title level={5}>{t('code')}</Typography.Title>
                                                <Typography.Text>DU 11</Typography.Text>
                                            </Col>
                                            <Col span={6}>
                                                <Typography.Title level={5}>{t('dateProvided')}</Typography.Title>
                                                <Typography.Text>Le Van Dat</Typography.Text>
                                            </Col>
                                            <Col span={6}>
                                                <Typography.Title level={5}>{t('owner')}</Typography.Title>
                                                <Typography.Text>owner 1</Typography.Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <Typography.Title level={5}>{t('status')}</Typography.Title>
                                                <Typography.Text>asd</Typography.Text>
                                            </Col>
                                        </Row>
                                        <Button type="primary">{t('returnAssets')}</Button>
                                    </div>
                                </div>
                            </div>
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
                                title: t('ownerName'),
                                dataIndex: 'ownerName',
                                sorter: (a, b) => a.ownerName > b.ownerName,
                                render: (text) => <a>{text}</a>,
                            },
                            {
                                title: t('description'),
                                dataIndex: 'description',
                                sorter: (a, b) => a.description > b.description,
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
        ownerName: 'abc1',
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
        ownerName: 'abc1',
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
        ownerName: 'abc1',
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
        ownerName: 'abc1',
        gender: 'Male',
        role: 'Leader',
        quantity: '1080',
        status: 'new',
        owner: 'asd',
        updateDate: '07/03/2022',
    },
];

export default Owner;
