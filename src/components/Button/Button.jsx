import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { Button as AntdButton } from 'antd';
const Button = ({ className, children, ...params }) => {
    return (
        <AntdButton className={`btn ${className}`} {...params}>
            {children}
        </AntdButton>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.string,
};

export default Button;
