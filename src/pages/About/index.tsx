import { useState } from 'react'
import './index.less'; // 引入 Less 文件

function About() {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
  
    return (
        <div className="company-intro">
            <h1 className="company-name">北京青遇衫户外运动有限责任公司</h1>
            <p className="company-description">
                这是一个专属于本硕博户外社交的组织，会不定期组织徒步、骑行、citywalk、跑步、飞盘、露营等各类户外活动欢迎大家一起出来玩🏂！同时，也希望大家可以破圈交友、获取更多人脉资源，在享受自然风光的同时收获志同道合的新朋友~
            </p>
        </div>
    )
  }
  
  export default About
