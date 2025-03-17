import { useState } from 'react'
import './index.less'; // 引入 Less 文件
import {travelData} from '../../utils/const'
import { Card, Button, Modal } from "antd";
import qrcode from '../../imgs/qrcode.png'

function News() {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
    const [travelInfo, setTravelInfo] = useState<TravelInfo | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const lookDetail = (travelInfo: TravelInfo) => {
      // TODO: 付费
      // setCurrent('2')
      // setTravelInfo(travelInfo)
      setIsModalOpen(true)
    }
    
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="new-main">
        {current === '1' && 
          <div className="">
            {travelData.map((item) => (
              // <Card >
                <div key={item.id} className="travel-item">
                  <h2>{item.title}</h2>
                  <p className='content'>{item.content.slice(0, 50)}...</p>
                  <div className='travel-item-img-box'>
                    <img className='travel-item-img'  src={item.img} alt="" />
                  </div>
                  <div className='row'>
                    <p>日期：{item.date}</p>
                    <p>价格：¥{item.price}</p>
                    <Button type='primary' onClick={() => lookDetail(item)}>付费阅读</Button>
                  </div>
                </div>
              // </Card>
            ))}
          </div>
        }
        {current === '2' && travelInfo &&
          <div className="">
            <h1>{travelInfo.title}</h1>
            <div>
              <div className='row'>
                <p>日期：{travelInfo.date}</p>
                <p>价格：¥{travelInfo.price}</p>
              </div>
              <p className='content'>{travelInfo.content}</p>
            </div>
          </div>
        }
        <Modal title="扫码付费阅读" open={isModalOpen} onCancel={handleCancel} footer={null}>
          <img style={{width: '100%'}} src={qrcode} alt="" />
        </Modal>
      </div>
    )
  }
  
  export default News