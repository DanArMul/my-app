import React, {Component} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Form, Input, Button, Checkbox } from 'antd';


class LogIn extends Component{
    render(){
        return (
          <div>
        <div style={{paddingTop:200}}>
            <h1 style={{textAlign:'center'}}>Go Go Diet</h1>
            <Form
            {...layout}
            name="basic"
            initialValues={{
            remember: true,
            }}
            //onFinish={onFinish}
            //onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
            ]}
            >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
            
          <Button type="primary" htmlType="submit" href = './Main'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
      )
    }
}
export default LogIn;

const layout = {
    labelCol: {
     offset:5,
      span: 2,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 7,
      span: 10,
    },
  };
  
//
//   const Demo = () => {
//     const onFinish = (values) => {
//       console.log('Success:', values);
//     };
  
//     const onFinishFailed = (errorInfo) => {
//       console.log('Failed:', errorInfo);
//     };
// }
