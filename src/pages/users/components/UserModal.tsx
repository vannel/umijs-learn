import { useEffect } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const UserModal = (props) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(props.formData); /** 重要！在这里对表单进行赋值 */
  }, [props.visible]);

  const handleOnOk = () => {
    form.submit();
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        onCancel={props.onCancel}
        onOk={handleOnOk}
        forceRender /** 加了forceRender可以避免一个Form警告 - 见antd Form 文档 */
      >
        <Form
          name="basic"
          form={form} /** 重要！一定要把form放这里绑定 */
          onFinish={props.onFormSubmit}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Input />
          </Form.Item>
          <Form.Item label="Created" name="create_time">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserModal;
