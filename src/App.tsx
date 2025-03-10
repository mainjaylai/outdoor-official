import { useState } from 'react'
import logo from './logo.svg'
import './App.less'
import Counter from './compoents/Counter'
import Main from './pages/Main'
import Mall from './pages/Mall'
import News from './pages/News'
import Custom from './pages/Custom'
import About from './pages/About'
import Contact from './pages/Contact'
import Car from './pages/Car'
import Login from './pages/Login'
import { Menu, Button, Affix } from "antd";
import type { MenuProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/userSlice'

type MenuItem = Required<MenuProps>['items'][number];

function App() {
  const user = useSelector(selectUser);
  const [count, setCount] = useState(0)
  const [current, setCurrent] = useState('1');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    {
      label: '首页',
      key: '1',
    },
    {
      label: '商城',
      key: '2',
    },
    {
      label: '资讯',
      key: '3',
    },
    {
      label: '商家入驻',
      key: '7',
    },
    {
      label: '关于我们',
      key: '4',
    },
    {
      label: '联系我们',
      key: '5',
    },
    {
      label: '购物车',
      key: '8',
    },
  ];

  return (
    <div className="App">
      <div className='top'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        {user.id === 0 ? 
          <Button type='text' className='user-name' onClick={() => setCurrent('6')}>登录/注册</Button> :
          <div className='user-name'>{user.name}</div>
        }
      </div>
      {current === '1' && <Main></Main>}
      {current === '2' && <Mall login={()=>{setCurrent('6')}} navToCar={()=>{setCurrent('8')}}></Mall>}
      {current === '3' && <News></News>}
      {current === '7' && <Custom></Custom>}
      {current === '4' && <About></About>}
      {current === '5' && <Contact></Contact>}
      {current === '8' && <Car navToMall={()=>{setCurrent('2')}}></Car>}
      {current === '6' && <Login navBack={()=>{setCurrent('1')}}></Login>}
      <div className='app-bottom'>
        <p>© 2025. 北京青衫国际旅行有限责任公司 版权所有. </p>
        <p>地址：北京市大兴区庞各庄镇瓜乡路2号2号楼1层</p>
        <p>备案号：京ICP备2025110062号-2</p>
      </div>
    </div>
  )
}

export default App
