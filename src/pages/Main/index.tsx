import { useState } from 'react'
import './index.less'; // 引入 Less 文件
import {goodsImages, productList} from '../../utils/const'
import { Col, Divider, Row } from 'antd';
import { Carousel } from 'antd';

function Main() {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
    const onChange = (currentSlide: number) => {
      console.log(currentSlide);
    };
    
  
    return (
      <div className="App">
        <Carousel className='Carousel' afterChange={onChange}>
          {goodsImages.map((item) => <div >
            <img className='img' src={item} alt=""  />
          </div>)}
        </Carousel>
        <Row gutter={16}>
          {productList.map((item) => 
            <Col className="gutter-row" span={6}>
              <img className='img-grid' src={item.image} alt=""  />
            </Col>
          )}
        </Row>
      </div>
    )
  }
  
  export default Main