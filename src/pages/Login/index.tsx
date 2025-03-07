import { useState } from 'react'
import './index.less'; // 引入 Less 文件
import { Card, Button, Form, Input, message } from "antd";
import type { FormProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../store/userSlice'

type FieldType = {
  username?: string;
  password?: string;
};

interface LoginProps {
  navBack: () => void
}

function Login(props: LoginProps) {
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
  
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      console.log('Success:', values);
      dispatch(updateUserInfo({id:1, name: values.username}))
      messageApi.open({
        type: 'success',
        content: '登录成功',
        duration: 1,
        onClose: () => props.navBack()
      });
    };
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Card className="login">
        {contextHolder}
        {/* <h2 style={{textAlign: 'center'}}>未注册用户自动注册</h2> */}
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              登录/注册
            </Button>
          </Form.Item>
        </Form>
      </Card> 
    )
  }
  
  export default Login