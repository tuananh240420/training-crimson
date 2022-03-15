import React from 'react';
import error from '../../assets/img/error.png';
import Header from '../../components/Header/index';
import './Error.scss';
const Error = () => {
    return (
        <div className="error">
            <Header />
            <div className="error__img-wrapper">
                <img src={error} alt="Error" />
            </div>
        </div>
    );
};

export default Error;
