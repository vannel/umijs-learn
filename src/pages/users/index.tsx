import { useState } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal';

const index = ({ users }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => setModalVisible(true)}>
            EDIT
          </Button>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={users.list} />
      <UserModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};
export default connect(mapStateToProps)(index);
