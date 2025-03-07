import { useState } from 'react'
import './index.less'; // 引入 Less 文件
import { Col, Divider, Row, Modal, Form, Input, message } from 'antd';
import type { FormProps } from 'antd';
import {goodsImages, productList} from '../../utils/const'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/userSlice'

interface MallProps {
  login: () => void
  navBack: () => void
}

type FieldType = {
  name?: string;
  phone?: string;
  address?: string;
};

function Mall(props: MallProps) {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const user = useSelector(selectUser);
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
    const [product, setProduct] = useState<ProductInfo | null>(null);

    const buy = () => {
      if (user.id === 0) {
        props.login()
      } else {
        showModal()
      }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      // setIsModalOpen(false);
      form.submit()
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      console.log('Success:', values);
      setIsModalOpen(false);
      // TODO: 付款
      messageApi.open({
        type: 'success',
        content: '购买成功',
        duration: 1,
        onClose: () => setCurrent('1')
      });
    };
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div className="mall">
        {current === '1' && 
          <Row className='product-list' gutter={[16, 24]}>
            {productList.map((item) => 
              <Col className="gutter-row" span={6} onClick={() => {setCurrent('2'), setProduct(item)}}>
                <div  className="product-box">
                  <div  className="product-image">
                    <img src={item.image} alt="商品图片" />
                  </div>
                  <div  className="product-info">
                    <div  className="product-name">{item.name}</div>
                    <div  className="product-price">¥{item.price}</div>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        }
        {current === '2' && product &&
          <div className='product-detail'>
            <div  className="product-box">
              <div  className="product-image">
                <img src={product.image} alt="商品图片" />
              </div>

              <div  className="product-details">
                <div className='flex-1'>
                  <div  className="product-title">{product.name}</div>
                  <div  className="product-price">¥{product.price}</div>
                  <div  className="product-stock">库存：{product.quantity} 件</div>
                  <div  className="quantity-selector">
                  </div>
                </div>
                <button  className="buy-button" onClick={buy}>立即购买</button>
              </div>
            </div>
          </div>
        }
        <Modal title="收货人信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            name="basic"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="姓名"
              name="name"
              rules={[{ required: true, message: '请输入姓名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="电话"
              name="phone"
              rules={[{ required: true, message: '请输入电话!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="地址"
              name="address"
              rules={[{ required: true, message: '请输入地址!' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        {contextHolder}
      </div>
    )
  }
  
  export default Mall