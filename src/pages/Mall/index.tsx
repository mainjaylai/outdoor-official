import { useState } from 'react'
import './index.less'; // 引入 Less 文件
import { Col, Divider, Row, Modal, Form, Input, message, Button, InputNumber } from 'antd';
import type { FormProps, InputNumberProps } from 'antd';
import {goodsImages, productList} from '../../utils/const'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/userSlice'
import { addCar } from '../../store/carSlice'

interface MallProps {
  login: () => void
  navToCar: () => void
}



function Mall(props: MallProps) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
    const [product, setProduct] = useState<ProductInfo | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const onChange: InputNumberProps['onChange'] = (value) => {
      console.log('changed', value);
      setQuantity(value as number)
    };

    const buy = () => {
      if (user.id === 0) {
        props.login()
      } else {
        dispatch(addCar({id: product?.id, quantity: quantity}))
        props.navToCar()
      }
    }

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
                  <Button className="product-car" type='primary'>加入购物车</Button>
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
                    <p>请选择数量：</p>
                    <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
                  </div>
                </div>
                <button  className="buy-button" onClick={buy}>加入购物车</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
  
  export default Mall