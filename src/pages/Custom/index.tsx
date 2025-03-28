import { useState } from 'react'
import styles from './index.module.less'; // 引入 Less 文件

function Custom() {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('1');
  
    return (
        <div className="company-intro">
            <h1 className="company-name">商家入驻流程</h1>
            <p className="company-description">
                <br/>欢迎入驻“北京青衫”商城!在下列阐述中“您”指“商家”。在您申请入驻的过程中，请填写常用手机号和邮箱，以方便日常联系。登录入驻页面后，查看并确认《入驻须知》，按流程提交相关材料。
                <br/>一、填写入驻信息，提交资质材料
                <br/>上传经营资质文件，填写店铺基础信息。包含营业执照信息、组织机构代码、税务登记信息、一般纳税人资格证、银行开户许可证等相关资质文件。（注：以上材料均需加盖公司公章）
                <br/>1、所有品牌均需上传相符的商标注册证书。若非品牌持有方，则需提供授权证明。授权的有效期限至少一年。
                <br/>2、行业资质信息应根据国家相关规定上传对应的行业资质证件，如：化妆品生产许可证、3C、质量检测报告等相关文件。
                <br/>我们会尽快处理您提交的入驻申请，在此期间您可以登录商家平台查看审核结果及详细审核意见。
                <br/>二、合同签署
                <br/>入驻申请通过后，我司将及时与您联系合同事宜。合同由法人签字或盖公司公章。
                <br/>三、提交保证金与开店费，店铺开通
                <br/>“北京青衫”商城对每个店铺/账号的使用者每个协议有效期收取10000元的开店费。待您交清开店费用后，我们将为您的店铺开通相应权限，届时您可登录商家后台上线商品。
                <br/>
                <br/>四、上传商品
                <br/>准备好商品信息和图片后，您可以通过商家后台逐一添加商品信息并上传商品，待“北京青衫”商城运营人员审核通过后上架销售。
                <br/>
                <br/>
                <br/>北京青衫国际旅行有限责任公司
            </p>
            
        </div>
    )
  }
  
  export default Custom