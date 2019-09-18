import './index.css';
import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon } from 'antd';
import visibilityImg from '../../assets/techCard1.png';
import complianceImg from '../../assets/techCard2.png';
import automationImg from '../../assets/techCard3.png';
import banner1 from '../../assets/technology_zeminsiz2.png';

class Technologies extends React.Component {
  render() {
    const { windowWidth } = this.props;
    let cardBodyHeight = '560px';
    if (1550 < windowWidth) {
      cardBodyHeight = '450px';
    }
    if (1400 < windowWidth && windowWidth < 1550) {
      cardBodyHeight = '465px';
    }
    if (1085 < windowWidth && windowWidth < 1400) {
      cardBodyHeight = '480px';
    }
    if (990 < windowWidth && windowWidth < 1085) {
      cardBodyHeight = '530px';
    }
    if (766 < windowWidth && windowWidth < 990) {
      cardBodyHeight = '375px';
    }
    if (766 < windowWidth && windowWidth < 780) {
      cardBodyHeight = '410px';
    }
    if (windowWidth < 766) {
      cardBodyHeight = '375px';
    }
    return (
      <div id="tech" className="homeDiv">
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span className="highlightsHeader">{i18n.t('technologies')}</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Col style={{marginTop: '20px'}} md={12} lg={8} xl={8}>
            <div class="tech-flip-card" style={{ minHeight: cardBodyHeight, height: cardBodyHeight}}>
              <div class="tech-flip-card-inner">
                <div class="tech-flip-card-front">
                  <div className="tech-flipCardHeader">Visibility</div>
                  <img style={{ width: '170px'}} src={visibilityImg} alt="Avatar" />
                  <p style={{ marginLeft: '25px', marginRight: '25px', fontSize: '18px' }}>
                    Complex networks with ten thousands of nodes requre scalable visibility tools. Skyz
                    provides stable, proven, multi vendor visibility solutions.
                  </p>
                </div>
                <div class="tech-flip-card-back">
                  <ul
                    style={{
                      fontSize: '18px',
                      marginTop: '90px',
                      listStyle: 'none',
                      textAlign: 'left',
                      lineHeight: '2.4',
                    }}
                  >
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Infrastructure life-cycle management
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Monitor availability and capacity usage on ports
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Monitoring and management of multi-vendor, infrastructures
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Physical and Logical Network Resource Discovery and Reconciliation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col style={{marginTop: '20px'}} md={12} lg={8} xl={8}>
            <div class="tech-flip-card" style={{ minHeight: cardBodyHeight, height: cardBodyHeight}}>
              <div class="tech-flip-card-inner">
                <div class="tech-flip-card-front">
                  <div className="tech-flipCardHeader">Compliance</div>
                  <img style={{ width: '170px'}} src={complianceImg} alt="Avatar" />
                  <p style={{ marginLeft: '25px', marginRight: '25px', fontSize: '18px' }}>
                    In today's business environment following diverse and complex regulations is
                    becoming increasingly important for the success of a company. Our compliance
                    technologies will help you to stay on the right side of the regulations
                  </p>
                </div>
                <div class="tech-flip-card-back">
                  <ul
                    style={{
                      fontSize: '18px',
                      marginTop: '90px',
                      listStyle: 'none',
                      textAlign: 'left',
                      lineHeight: '2.4',
                    }}
                  >
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Scalable, scheduled, distributed data collection
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Satisfy regulations related to network resource usage
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Flexible and extensive regulatory reporting capabilities
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Ability to collect and store flow data (IPFIX) at a scalable level
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col style={{marginTop: '20px'}} md={24} lg={8} xl={8}>
            <div class="tech-flip-card" style={{ minHeight: cardBodyHeight, height: cardBodyHeight}}>
              <div class="tech-flip-card-inner">
                <div class="tech-flip-card-front">
                  <div className="tech-flipCardHeader">Automation</div>
                  <img style={{ width: '170px'}} src={automationImg} alt="Avatar" />
                  <p style={{ marginLeft: '25px', marginRight: '25px', fontSize: '18px' }}>
                    Auto provisioning capabilities integrated with business support systems (such as
                    order management), reduce the risks and overheads caused by manual operations.Skyz
                    automation technologies enable easier management of complex and multi vendor
                    networks, as well as benefiting from evolving Software Defined Technologies
                  </p>
                </div>
                <div class="tech-flip-card-back">
                  <ul
                    style={{
                      fontSize: '18px',
                      marginTop: '90px',
                      listStyle: 'none',
                      textAlign: 'left',
                      lineHeight: '2.4',
                    }}
                  >
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Respond to alarming situations with automated actions
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Automatic backup and recovery of infrastructure configuration
                    </li>
                    <li>
                      <Icon
                        style={{ fontSize: '20px', marginRight: '7px', marginLeft: '-25px' }}
                        type="check-circle"
                        theme="twoTone"
                      />
                      Provide automatic configuration of infrastructure in accordance to customer needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Technologies;
