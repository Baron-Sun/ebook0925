import React, { Component } from 'react';
import Logo from '../../media/imageDropShadow.png';
import PoliceLabel from '../../media/备案图标.png'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from "antd";

export class Welcome extends Component {
  state = {
    loading: false
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };


  render() {
    const { loading } = this.state
    return (
      <div>
        <img style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '15%'
            }} src={Logo} alt="Logo" />
        <h2 style={styleBlueText}>University of California, Irvine</h2>
        <h2 style={styleBlueText}>Interactive Storybook Research Project</h2>
        <h2 style={styleBlueText}>美国加州大学欧文分校 · 互动式英语电子绘本科研项目</h2>
        <Card 
            style={{ 
              'width': '100%', 
              'borderRadius': '25px',
              borderColor: 'yellow'
              }}
            >
            <h4 style={styleBlackText}>尊敬的家长:</h4>
            <h4 style={styleBlackText}>您好，感谢您与孩子一起参与本次研究项目！为了实验顺利进行，请您注意以下几点：</h4>
            {bulletPointsList()}
            <h4 style={styleBlackText}>如果您对实验有任何疑问，欢迎随时与我们联系：</h4>
            <h4 style={{color:'black',fontSize:'medium',textAlign: 'center', fontWeight: 'bold'}}>微信：dayunheshui | 邮箱：dandany1@uci.edu | 电话：(中)13240736364 / (美)213-446-8747</h4>
        </Card>
          <h2 style={styleBlueText}>请您在做好准备后，点击“登录”</h2>
          <div style={styleContainer}>
            <div style={styleCenter}>
              <Link to="/login" > 
                 <Button type="primary" style={styleButton}>登 录 &emsp; Login</Button>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h2 style={styleBlueText}>本网站备案/许可证编号为：浙ICP备2020036580号</h2>
          <div style={styleBlueText}>
            < img style={{ 
              alignItems: "center",
              justify: "center"
            }} src={PoliceLabel}/>
            浙公网安备 33102302000273号
          </div>
          {/* <div id="container" style="white-space:nowrap">
              <div id="PoliceLabel" style="display:inline;">
                <img src={PoliceLabel}/>
              </div>
              <div id="texts" style="display:inline; white-space:nowrap;"> 
                <p style={styleBlueText}>浙公网安备 33102302000273号</p >
              </div>
          </div> */}

          
          
      </div>

    );
  }
}

const bulletPoints = [
'请在阅读期间确保网络畅通',
 '请在安静的环境下进行阅读',
  '阅读时请保持设备音量适中',
  '麻烦您利用其他设备录制阅读视频，并确保您和孩子的脸一直在摄像头范围内'
];

const bulletPointsList = () => (
  <ul>
    {bulletPoints.map(function(item) {
      return (
        <Row>
            <Col span={20} push={4}>
            <div style={styleBlackText}> {item} </div>
            </Col>
            <Col span={4} pull={20}>
              <img style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '30%'
              }} src={Logo} alt="Logo" />
            </Col>
          </Row>
        );
    })}
  </ul>
);

const styleTab = {
  tabSize: 6
}

const styleBlueText = {
  color:'blue',
  fontSize:'x-large',
  textAlign: 'center',
  fontWeight: 'bold'
};

const styleBlackText = {
  color:'black',
  fontSize:'medium',
  fontWeight: 'bold'
};

const styleContainer = {
  position: 'relative'
};

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const styleButton = {
  backgroundColor: 'blue',
  borderColor: 'blue',
  textAlign: 'center',
  fontSize:'medium',
  'borderRadius': '10px',
  fontWeight: 'bold',
  tabSize: 6
};

export default Welcome;
