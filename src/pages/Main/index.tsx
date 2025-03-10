import { useState } from 'react'
import styles from './index.module.less'; // 引入 Less 文件
import {goodsImages, productList} from '../../utils/const'
import { Col, Divider, Row } from 'antd';
import { Carousel } from 'antd';
import { ThunderboltOutlined, SafetyCertificateOutlined, TransactionOutlined } from '@ant-design/icons';

function Main() {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
    const onChange = (currentSlide: number) => {
      console.log(currentSlide);
    };
    
  
    return (
      <div className={styles.App}>
        <Carousel className={styles.Carousel} afterChange={onChange}>
          {goodsImages.map((item) => <div >
            <img className={styles.img} src={item} alt=""  />
          </div>)}
        </Carousel>
        <Row justify="space-between">
          <Col className={styles.colBox} span={6}>
            <ThunderboltOutlined className={styles.icon} />
            极速发货</Col>
          <Col className={styles.colBox} span={6}>
            <SafetyCertificateOutlined className={styles.icon} />
            安全安心</Col>
          <Col className={styles.colBox} span={6}>
            <TransactionOutlined className={styles.icon} />
            24h售后保障</Col>
        </Row>
        <Row gutter={16}>
          {productList.map((item) => 
            <Col span={6}>
              <img className={styles.imgGrid} src={item.image} alt=""  />
            </Col>
          )}
        </Row>
      </div>
    )
  }
  
  export default Main