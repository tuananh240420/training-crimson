import React from 'react';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './Checkvalidate.scss';
import PropTypes from 'prop-types';

const Checkvalidate = ({ length, lower, upper, number, special }) => {
    return (
        <div className="check">
            <ul>
                <li className="check-item">{length ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}8 characters in length</li>
                <li className="check-item">
                    {lower ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                    Lower case letter
                </li>
                <li className="check-item">
                    {upper ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                    Upper case letter
                </li>
                <li className="check-item">
                    {number ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                    Numberic character
                </li>
                <li className="check-item">
                    {special ? <CheckCircleOutlined className="success" /> : <CloseCircleOutlined className="danger" />}
                    Specicial character
                </li>
            </ul>
        </div>
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
