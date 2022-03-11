import React from 'react';
import './Du.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DU_MANAGEMENT_MENU } from '../../contants';
const Du = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickDUMenuItem = (item) => {
        navigate(item);
    };

    return (
        <>
            <div className="page dumanagement">
                <h1 className="page-title">{t('duManagement')}</h1>
                <div className="page-content">
                    <div className="content-header">
                        {DU_MANAGEMENT_MENU.map((item) => (
                            <button
                                className={`dumanagement-btn ${location.pathname.split('/')[2] === item ? 'active' : ''}`}
                                key={item}
                                onClick={(e) => handleClickDUMenuItem(item)}
                            >
                                {t(item)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Du;
