import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import './Confirmation.scss';
import { ExclamationOutlined } from '@ant-design/icons';
const Confirmation = ({ openConfirmModal, onCancel, handleOk }) => {
    return (
        <Modal width={350} className="confirmation" visible={openConfirmModal} onOk={handleOk} onCancel={onCancel} okText="Yes">
            <div className="confirmation__icon">
                <ExclamationOutlined />
            </div>
            <h3 className="confirmation__title">Confirm</h3>
            <p className="confirmation__desc">Are you sure?</p>
        </Modal>
    );
};

Confirmation.propTypes = {
    openConfirmModal: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    handleOk: PropTypes.func.isRequired,
};

export default Confirmation;
