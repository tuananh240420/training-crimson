import React from 'react';
import './Report.scss';
import { useTranslation } from 'react-i18next';
import { Row, Card, Col, Statistic, Select } from 'antd';
import { UsergroupAddOutlined, StarTwoTone } from '@ant-design/icons';
import { Column } from '@ant-design/plots';

const Report = () => {
    const { t } = useTranslation();
    return (
        <div className="page report">
            <h1 className="page-title">{t('report')}</h1>
            <div className="page-content">
                <div className="content-header">
                    <Row gutter={30}>
                        <Col span={48}>
                            <Card>
                                <Statistic value={1300} prefix={<UsergroupAddOutlined />} suffix={t('totalUser')} />
                            </Card>
                        </Col>
                        <Col span={48}>
                            <Card>
                                <Statistic value={322} prefix={<StarTwoTone />} suffix={t('totalRoomMeeting')} />
                            </Card>
                        </Col>
                        <Col span={48}>
                            <Card>
                                <Statistic value={93} prefix={<StarTwoTone />} suffix={t('totalBooking')} />
                            </Card>
                        </Col>
                        <Col span={48}>
                            <Card>
                                <Statistic value={12} prefix={<StarTwoTone />} suffix={t('roomEmpty')} />
                            </Card>
                        </Col>
                        <Col span={48}>
                            <Card>
                                <Statistic value={3} prefix={<StarTwoTone />} suffix={t('roomMeetings')} />
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="content-main mt-6">
                    <Row gutter={32}>
                        <Col span={12}>
                            <div className="month-char">
                                <div className="char-header">
                                    <div className="char-title">{t('totalBook')}</div>
                                    <Select defaultValue="2020">
                                        <Select.Option value="jack">2022</Select.Option>
                                        <Select.Option value="lucy">2021</Select.Option>
                                        <Select.Option value="Yiminghe">2019</Select.Option>
                                    </Select>
                                </div>
                                <DemoColumn />
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="month-char">
                                <div className="char-header">
                                    <div className="char-title">{t('totalBook')}</div>
                                    <Select defaultValue="2020">
                                        <Select.Option value="jack">2022</Select.Option>
                                        <Select.Option value="lucy">2021</Select.Option>
                                        <Select.Option value="Yiminghe">2019</Select.Option>
                                    </Select>
                                </div>
                                <DemoColumn />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

// TODO: Data Demo
const DemoColumn = () => {
    const data = [
        {
            type: 'JAN',
            sales: 35,
        },
        {
            type: 'FEB',
            sales: 35,
        },
        {
            type: 'MAR',
            sales: 52,
        },
        {
            type: 'APR',
            sales: 20,
        },
        {
            type: 'MAY',
            sales: 132,
        },
        {
            type: 'JUN',
            sales: 48,
        },
        {
            type: 'JUL',
            sales: 78,
        },
        {
            type: 'AUG',
            sales: 23,
        },
        {
            type: 'SEC',
            sales: 38,
        },
        {
            type: 'OCT',
            sales: 38,
        },
        {
            type: 'NOV',
            sales: 38,
        },
        {
            type: 'DEC',
            sales: 38,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'ASD',
            },
            sales: {
                alias: 'ASD',
            },
        },
    };
    return <Column {...config} />;
};

export default Report;
