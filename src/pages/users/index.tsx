import { useState } from 'react';
import { Table, Tag, Space, Button, Modal, Popconfirm } from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal';

const index = ({ users, dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(undefined);
  const handleOpenEdit = (item) => {
    setModalVisible(true);
    setEditingItem({ ...item });
  };
  const handleClickRemove = async (item) => {
    console.log('item to delete', item);
    await dispatch({
      type: 'users/remove',
      payload: item,
    });
    dispatch({
      type: 'users/query',
    });
  };
  const handleFormSubmit = async (formData) => {
    await dispatch({
      type: 'users/save',
      payload: { ...editingItem, ...formData },
    });
    setModalVisible(false);
    setEditingItem(undefined);
    dispatch({
      type: 'users/query',
    });
  };
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Created',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleOpenEdit(record)}>
            EDIT
          </Button>
          <Popconfirm
            title="确定要删除？"
            okText="狠心删除"
            cancelText="只是手滑"
            onConfirm={() => handleClickRemove(record)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={users.list} rowKey="id" />
      <UserModal
        formData={editingItem}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps)(index);
