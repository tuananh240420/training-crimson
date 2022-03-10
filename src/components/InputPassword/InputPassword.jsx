import React, { useState } from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Form, Input, Popover } from 'antd';
import { useTranslation } from 'react-i18next';

import './InputPassword.scss';

const InputPassword = () => {
    const { t } = useTranslation();
    const [validator, setValidator] = useState({
        length: false,
        lower: false,
        upper: false,
        number: false,
        special: false,
    });
    const handleChangePassword = (e) => {
        const value = e.target.value;
        let validateObj = {};
        validateObj.length = value.length >= 8;
        const lowerRegex = new RegExp(/[a-z]/);
        validateObj.lower = lowerRegex.test(value);
        const upperRegex = new RegExp(/[A-Z]/);
        validateObj.upper = upperRegex.test(value);
        const numberRegex = new RegExp(/[0-9]/g);
        validateObj.number = numberRegex.test(value);
        const specialRegex = new RegExp(/[@$!%*#?&]/);
        validateObj.special = specialRegex.test(value);
        setValidator(validateObj);
    };

    return (
        <>
            <Popover
                placement="right"
                content={
                    <ul className="check">
                        <li className="check-item">
                            {validator.length ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            {t('passwordLengthMessage')}
                        </li>
                        <li className="check-item">
                            {validator.lower ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            {t('passwordLowerMessage')}
                        </li>
                        <li className="check-item">
                            {validator.upper ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            {t('passwordUpperMessage')}
                        </li>
                        <li className="check-item">
                            {validator.number ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            {t('passwordNumbericMessage')}
                        </li>
                        <li className="check-item">
                            {validator.special ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            {t('passwordSpecialMessage')}
                        </li>
                    </ul>
                }
                trigger="focus"
            >
                <Form.Item
                    className="label-password"
                    label={t('password')}
                    name="password"
                    hasFeedback
                    rules={[
                        {
                            validator: () => {
                                if (Object.values(validator).filter((item) => item === true).length !== 5) return Promise.reject(new Error(t('passwordMessage')));
                                else return Promise.resolve();
                            },
                        },
                    ]}
                >
                    <Input.Password className="input-password" placeholder={t('passwordPlaceholder')} onChange={handleChangePassword} />
                </Form.Item>
            </Popover>
        </>
    );
};

export default InputPassword;
