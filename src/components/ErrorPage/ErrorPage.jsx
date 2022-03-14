import React from 'react';
import Header from '../header/Header';
import ErrorPageImage from '../../assets/img/ErrorPage.png';
import './ErrorPage.scss';

const ErrorPage = () => {
    return (
        <>
            <div className="error--page">
                <Header />
                <img className="image--error" src={ErrorPageImage} alt="error page" />
            </div>
        </>
    );
};

export default ErrorPage;
