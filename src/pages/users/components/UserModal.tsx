import React from 'react';
import { Modal, Button } from 'antd';

const UserModal = (props) => {
  return (
    <Modal
      title="Basic Modal"
      visible={props.visible}
      onCancel={props.onCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default UserModal;
