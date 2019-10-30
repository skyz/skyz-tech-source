import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Icon } from 'antd';
import banner1 from '../../assets/contact_banner.png';
import soitronsiber from '../../assets/soitronsibergüvenlik.png';
import sekomiletisim from '../../assets/sekomiletisim.png';

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="homeDiv">
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Row className="subtitleRow">
            <Col span={10} className="titleRowDivider" />
            <Col span={4} className="titleMiddleDiv">
              <span className="highlightsHeader">{i18n.t('CONTACT US')}</span>
            </Col>
            <Col span={10} className="titleRowDivider" />
          </Row>
          <Row>
            <p style={{ color: 'rgba(0,0,0, 0.8)', fontSize: '24px' }}>
              Kısıklı Mah. Alemdağ Cad. Masaldan İş Merkezi C Blok K:3 Üsküdar 34692 Istanbul
            </p>
            <div style={{ fontSize: '18px', color: 'rgba(0,0,0, 0.8)' }}>
              <div style={{ marginBottom: '30px' }}>
                <Icon type="inbox" /> <a href="mailTo:info@skyz.tech">info@skyz.tech</a>
              </div>
              <p>
                <Icon type="phone" /> +90 0216 316 0103
              </p>
              <p>
                <Icon type="printer" /> +90 0216 316 0109
              </p>
            </div>
            <div id="map" className="map" />
            <div style={{ fontSize: '18px', color: 'rgba(0,0,0, 0.8)', marginTop: '50px' }}>
              <div>
                <h2>Group Companies</h2>
              </div>
              <div style={{ marginTop: '45px' }}>
                <a href="www.sekom.com.tr" target="_blank"><img
                  style={{ width: '200px', marginRight: '90px', marginLeft: '90px' }}
                  src={sekomiletisim}
                /></a>
                <a href="www.soitron.com.tr" target="_blank"><img style={{ width: '200px', marginLeft: '90px' }} src={soitronsiber} /></a>
              </div>
            </div>
          </Row>
        </Row>
      </div>
    );
  }
}

export default Contact;
