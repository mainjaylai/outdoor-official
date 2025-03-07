import { useState } from 'react'
import './index.less'; // 引入 Less 文件

function Contact() {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
  
    
  
    return (
    <div className="contact-page">
      <h1 className="company-name">北京青衫国际旅行有限责任公司</h1>
      <div className="contact-info">
        <div className="info-item">
          <h2>地址</h2>
          <p>北京市大兴区庞各庄镇瓜乡路2号2号楼1层</p>
        </div>
        <div className="info-item">
          <h2>电话</h2>
          <p>+86 15650785307 09:30-18:00</p>
        </div>
        <div className="info-item">
          <h2>邮箱</h2>
          <p>guokeoutdoor@163.com</p>
        </div>
      </div>
    </div>
    )
  }
  
  export default Contact