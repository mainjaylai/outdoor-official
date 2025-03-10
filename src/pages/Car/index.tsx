import { useEffect, useState } from 'react'
import styles from './index.module.less'; // 引入 Less 文件
import { Col, Divider, Row, Modal, Form, Input, message, Button, InputNumber, Table } from 'antd';
import type { FormProps, InputNumberProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectCar } from '../../store/carSlice'
import { productList } from '../../utils/const'

interface Props {
  navToMall: () => void
}

type FieldType = {
  name?: string;
  phone?: string;
  address?: string;
};

interface DataType extends ProductInfo {
  buyAmount: number;
}

const columns = [
  {
    title: '产品图',
    dataIndex: 'image',
    key: 'image',
    render: (text: string) => <img style={{width: '200px', height: '200px'}} src={text} alt="商品图片" />,
  },
  {
    title: '产品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    render: (text: string) => <p>¥{text}</p>,
  },
  {
    title: '数量',
    dataIndex: 'buyAmount',
    key: 'buyAmount',
  },
  {
    title: '总价',
    dataIndex: 'total',
    key: 'total',
    render: (_: any, record: any) => (
      <p>¥{record.buyAmount * record.price}</p>
    ),
  },
];

function Car(props: Props) {
    const car = useSelector(selectCar)
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataSource, setDataSource] = useState<DataType[]>([]);

    useEffect(() => {
      const res = car.map((c) => {
        const product = productList.find(p => p.id === c.id) as ProductInfo;
        return {
          ...product,
          buyAmount: c.quantity
        }
      })
      setDataSource(res);
    }, [])
    

    const buy = () => {
      showModal()
    }

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
        setIsModalOpen(false);
        const totalAmount = dataSource.reduce((sum, product) => {
          return sum + product.buyAmount * product.price;
        }, 0);
        console.log('Success:', totalAmount);
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
        <div className={styles.main}>
          <Table pagination={false} rowKey='id' dataSource={dataSource} columns={columns} />
          <div className={styles.buttonRow}>
            <Button className={styles.btn} size='large' onClick={() => props.navToMall()}>继续购物</Button>
            <Button className={styles.btn} size='large' type='primary' onClick={buy}>立即下单</Button>
          </div>
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
  
  export default Car