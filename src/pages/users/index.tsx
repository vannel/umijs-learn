import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';

const index = ({ users }) => {
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
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={users.list} />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};
export default connect(mapStateToProps)(index);
