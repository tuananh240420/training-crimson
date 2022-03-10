import React, { useState, useEffect } from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Form, Input, Popover } from 'antd';

import './Checkvalidate.scss';
import PropTypes from 'prop-types';

const Checkvalidate = () => {
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);

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
        <Form.Item
            className="label-password"
            label="Password"
            name="password"
            rules={[
                {
                    validator: () => {
                        console.log(Object.values(validator).find((item) => !item));
                        if (Object.values(validator).find((item) => !item)) return Promise.reject(new Error('Pls  check input password'));
                        else return Promise.resolve();
                    },
                },
            ]}
        >
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
                <Input.Password className="input-password" placeholder="Enter your password" onChange={handleChangePassword} onFocus={() => setShowPasswordCheck(true)} />
            </Popover>
        </Form.Item>
    );
};

Checkvalidate.propTypes = {
    length: PropTypes.bool,
    lower: PropTypes.bool,
    number: PropTypes.bool,
    upper: PropTypes.bool,
    special: PropTypes.bool,
};

export default Checkvalidate;
