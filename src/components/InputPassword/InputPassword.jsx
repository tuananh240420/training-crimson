import React, { useState } from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Form, Input, Popover } from 'antd';

import './InputPassword.scss';

const InputPassword = () => {
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
                            {validator.length ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}8 characters in length
                        </li>
                        <li className="check-item">
                            {validator.lower ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            Lower case letter
                        </li>
                        <li className="check-item">
                            {validator.upper ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            Upper case letter
                        </li>
                        <li className="check-item">
                            {validator.number ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            Numberic character
                        </li>
                        <li className="check-item">
                            {validator.special ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                            Specicial character
                        </li>
                    </ul>
                }
                trigger="focus"
            >
                <Form.Item
                    className="label-password"
                    label="Password"
                    name="password"
                    hasFeedback
                    rules={[
                        {
                            validator: () => {
                                if (Object.values(validator).filter((item) => item === true).length !== 5) return Promise.reject(new Error('Your password is invalid'));
                                else return Promise.resolve();
                            },
                        },
                    ]}
                >
                    <Input.Password className="input-password" placeholder="Enter your password" onChange={handleChangePassword} />
                </Form.Item>
            </Popover>
        </>
    );
};

export default InputPassword;
