import { useState } from 'react'
import './index.less'; // 引入 Less 文件
import {travelData} from '../../utils/const'
import { Card, Button } from "antd";

function News() {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
    const [travelInfo, setTravelInfo] = useState<TravelInfo | null>(null);

    const lookDetail = (travelInfo: TravelInfo) => {
      // TODO: 付费
      setCurrent('2')
      setTravelInfo(travelInfo)
    }
    
  
    return (
      <div className="App">
        {current === '1' && 
          <div className="">
            {travelData.map((item) => (
              // <Card >
                <div key={item.id} className="travel-item">
                  <h2>{item.title}</h2>
                  <p className='content'>{item.content.slice(0, 50)}...</p>
                  <div className='row'>
                    <p>日期：{item.date}</p>
                    <p>价格：¥{item.price}</p>
                    <Button onClick={() => lookDetail(item)}>查看详情</Button>
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
      </div>
    )
  }
  
  export default News