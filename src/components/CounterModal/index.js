import { Modal } from 'antd';
import React from 'react';

function CounterModal({ handleIncrease, handleDecrease, handleModal, openModal }) {
  return (
    <Modal title="Basic Modal" visible={openModal} onOk={handleModal} onCancel={handleModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>

  );
}

export default CounterModal;
