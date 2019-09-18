import './index.css';
import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon } from 'antd';
class Solutions extends React.Component {
  render() {
    return (
      <div id="solutions" className="homeDiv">
        <Row className="titleRow" style={{ marginBottom: '45px' }}>
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span className="highlightsHeader">{i18n.t('solutions')}</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <Row className="contentBlock">
          <Col lg={12} xl={8}>
            <Card className="homeCard" bodyStyle={{ minHeight: '350px' }}>
              <div className="overlayDiv">
                <div style={{ fontSize: '24px', marginTop: '20px', marginBottom: '15px' }}>
                  Network Visibility Suite
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Icon style={{ fontSize: '60px' }} type="share-alt" />
                </div>
                <div>
                  <p style={{marginRight: '20px', marginLeft: '20px'}}>
                    Integrated Network Discovery, Performance Monitoring, Fault Management and Log
                    Management Solutions
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={12} xl={8}>
            <Card className="homeCard" bodyStyle={{ minHeight: '350px' }}>
              <div className="overlayDiv">
                <div style={{ fontSize: '24px', marginTop: '20px', marginBottom: '15px' }}>
                  IPAM
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Icon style={{ fontSize: '60px' }} type="wifi" />
                </div>
                <div style={{ fontSize: '18px', marginTop: '15px' }}>
                  <p style={{marginRight: '20px', marginLeft: '20px'}}>
                    Carrier Grade IP Address Management solution providing Live IP inventory
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={12} xl={8}>
            <Card className="homeCard" bodyStyle={{ minHeight: '350px' }}>
              <div className="overlayDiv">
                <div style={{ fontSize: '24px', marginTop: '20px', marginBottom: '15px' }}>
                  Discovery & Inventory
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Icon style={{ fontSize: '60px' }} type="cluster" />
                </div>
                <div style={{ fontSize: '18px', marginTop: '15px' }}>
                  <p style={{marginRight: '20px', marginLeft: '20px'}}>
                    A comprehensive Discovery, Network Resource Inventory and Reconciliation Solution
                    for Telco Networks
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={12} xl={8}>
            <Card className="homeCard" bodyStyle={{ minHeight: '350px' }}>
              <div className="overlayDiv">
                <div style={{ fontSize: '24px', marginTop: '20px', marginBottom: '15px' }}>
                  Peta Scale Logger
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Icon style={{ fontSize: '60px' }} type="control" />
                </div>
                <div style={{ fontSize: '18px', marginTop: '15px' }}>
                  <p style={{marginRight: '20px', marginLeft: '20px'}}>Regulatory traffic flow logging at Petabyte Scale</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={12} xl={8}>
            <Card className="homeCard" bodyStyle={{ minHeight: '350px' }}>
              <div className="overlayDiv">
                <div style={{ fontSize: '24px', marginTop: '20px', marginBottom: '15px' }}>
                  LOTT IoT Platform
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Icon style={{ fontSize: '60px' }} type="global" />
                </div>
                <div style={{ fontSize: '18px', marginTop: '15px' }}>
                  <p style={{marginRight: '20px', marginLeft: '20px'}}>
                    Multi Tenant platform for collecting, processing and visualization of vast amounts
                    of data from multi vendor sensors.
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={12} xl={8}>
            <Card className="homeCard" bodyStyle={{ minHeight: '350px' }}>
              <div className="overlayDiv">
                <div style={{ fontSize: '24px', marginTop: '20px', marginBottom: '15px' }}>
                  Broadband Customer Experience Management
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Icon style={{ fontSize: '60px' }} type="usergroup-add" />
                </div>
                <div style={{ fontSize: '18px', marginTop: '15px' }}>
                  <p style={{marginRight: '20px', marginLeft: '20px'}}>
                    Our Big Data solution for consolidating and analyzing business critical
                    information from different information sources on the broadband access network{' '}
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Solutions;
