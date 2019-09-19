import { Layout, Menu, Divider, Row, Col, Icon } from 'antd';
import React, { Fragment } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink, Redirect } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import i18n from './i18n';
import global from './global';
import './layout.css';
import logo from './assets/skyz colorful.png';
import memberOf from './assets/soitron-group.png';
import Home from './views/Home';
import Technologies from './views/Technologies';
import Solutions from './views/Solutions';
import Expertise from './views/Expertise';
import Career from './views/Career';
import Contact from './views/Contact';
import gp_file from './docs/gp.pdf';
import kvkk_a from './docs/kvkk_a.pdf';
import kvkk_b from './docs/kvkk_b.pdf';

const { Header, Content, Footer } = Layout;

class GlobalLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      user: {},
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      visible: false,
      scrollPos: 0,
    };
  }

  updateHeight = () => {
    this.setState({ windowHeight: window.innerHeight, windowWidth: window.innerWidth });
  };

  handleScroll = event => {
    let position = event.srcElement.documentElement.scrollTop;
    this.setState({ scrollPos: position });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateHeight);
  }

  render() {
    const { scrollPos, windowWidth, windowHeight } = this.state;
    const path = window.location.pathname;
    const techPosition = document.getElementById('tech')
      ? document.getElementById('tech').offsetTop
        ? document.getElementById('tech').offsetTop
        : 0
      : 0;
    const solutionsPosition = document.getElementById('solutions')
      ? document.getElementById('solutions').offsetTop
        ? document.getElementById('solutions').offsetTop
        : 0
      : 0;
    const expertisePosition = document.getElementById('expertise')
      ? document.getElementById('expertise').offsetTop
        ? document.getElementById('expertise').offsetTop
        : 0
      : 0;
    const careerPosition = document.getElementById('career')
      ? document.getElementById('career').offsetTop
        ? document.getElementById('career').offsetTop
        : 0
      : 0;
    const contactPosition = document.getElementById('contact')
      ? document.getElementById('contact').offsetTop
        ? document.getElementById('contact').offsetTop
        : 0
      : 0;
    const activeMenu = () => {
      if (-1 < scrollPos && scrollPos < techPosition) {
        return 'home';
      } else if (techPosition < scrollPos && scrollPos < solutionsPosition) {
        return 'tech';
      } else if (solutionsPosition < scrollPos && scrollPos < expertisePosition) {
        return 'solutions';
      } else if (expertisePosition < scrollPos && scrollPos < careerPosition) {
        return 'expertise';
      } else if (careerPosition < scrollPos && scrollPos < contactPosition) {
        return 'career';
      } else if (careerPosition < scrollPos) {
        return 'contact';
      } else {
        return 'home';
      }
    };
    return (
      <Layout
        onScroll={this.checkScroll}
        id="layout"
        style={{ minHeight: windowHeight, zIndex: 3 }}
      >
        <Header
          className="headerBar"
          style={
            scrollPos > 100
              ? { background: 'rgba(0,0,0,0.82)', boxShadow: '0px 2px 12px 1px rgba(0, 0, 0, 0.9)' }
              : undefined
          }
        >
          <Row
            className="contentBlock"
            style={{
              marginLeft: '0',
              marginRight: '0',
              paddingRight: windowWidth < 1520 ? '0' : '15%',
              paddingLeft: windowWidth < 1520 ? '0' : '15%',
              background: 'transparent',
              marginTop: 0,
            }}
          >
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={1} duration={500}>
              <Col className="logoDiv">
                <img
                  style={scrollPos > 100 ? { filter: 'brightness(10)' } : undefined}
                  src={logo}
                  className="logoImg"
                />
              </Col>
            </Link>
            <Col>
              <Menu
                className="headerUl"
                mode="horizontal"
                defaultSelectedKeys={
                  path == '/home'
                    ? ['1']
                    : path == '/technologies'
                    ? ['2']
                    : path == '/solutions'
                    ? ['3']
                    : path == '/expertise'
                    ? ['4']
                    : path == '/career'
                    ? ['5']
                    : path == '/contact'
                    ? ['6']
                    : ['1']
                }
                style={{
                  lineHeight: '45px',
                  float: windowWidth < 850 ? 'right' : 'left',
                  background: 'transparent',
                  marginLeft: '25px',
                  marginTop: windowWidth < 850 ? '0' : '10px',
                  borderBottom: 'none',
                  width: windowWidth < 850 ? '100px' : windowWidth < 1090 ? '638px' : '',
                }}
              >
                <Menu.Item key="1">
                  <Link
                    style={{
                      color: windowWidth < 850 ? 'black' : activeMenu() == 'home' ? 'red' : 'white',
                    }}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    className="menuItemText"
                  >
                    {i18n.t('about')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link
                    style={{
                      color: windowWidth < 850 ? 'black' : activeMenu() == 'tech' ? 'red' : 'white',
                    }}
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    className="menuItemText"
                  >
                    {i18n.t('technologies')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link
                    style={{
                      color:
                        windowWidth < 850 ? 'black' : activeMenu() == 'solutions' ? 'red' : 'white',
                    }}
                    activeClass="active"
                    to="solutions"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    className="menuItemText"
                  >
                    {i18n.t('solutions')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link
                    style={{
                      color:
                        windowWidth < 850 ? 'black' : activeMenu() == 'expertise' ? 'red' : 'white',
                    }}
                    activeClass="active"
                    to="expertise"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    className="menuItemText"
                  >
                    {i18n.t('expertise')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link
                    style={{
                      color:
                        windowWidth < 850 ? 'black' : activeMenu() == 'career' ? 'red' : 'white',
                    }}
                    activeClass="active"
                    to="career"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    className="menuItemText"
                  >
                    {i18n.t('career')}
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link
                    style={{
                      color:
                        windowWidth < 850 ? 'black' : activeMenu() == 'contact' ? 'red' : 'white',
                    }}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    className="menuItemText"
                  >
                    {i18n.t('contact')}
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            {windowWidth > 1090 ? (
              <Col style={{ float: 'right' }}>
                <div
                  onClick={() => {
                    window.open('https://www.soitron.com.tr', '_blank');
                  }}
                  className="memberOfDiv"
                >
                  <div style={{ marginTop: '-10px' }}>
                    <a
                      style={{
                        color: windowWidth < 850 ? 'black' : 'white',
                        marginRight: '8px',
                        fontSize: '10px',
                        fontWeight: '700',
                        fontFamily: 'Source Sans Pro", "sans-serif',
                      }}
                    >
                      MEMBER OF
                    </a>
                    <img style={{ marginBottom: '7px' }} src={memberOf} />
                  </div>
                </div>
              </Col>
            ) : null}
          </Row>
        </Header>
        <Divider style={{ margin: '0' }} />
        <Content className="responsive-content">
          <Home windowWidth={windowWidth} />
          <Technologies windowWidth={windowWidth} />
          <Solutions windowWidth={windowWidth} />
          <Expertise windowWidth={windowWidth} />
          <Career windowWidth={windowWidth} />
          <Contact windowWidth={windowWidth} />
        </Content>
        <div style={{ height: '100px', background: '#CED5D8' }} />
        <Footer style={{ textAlign: 'center', backgroundColor: '#333333' }}>
          <Fragment>
            <Row className="contentBlock" style={{ color: '#fff' }}>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('about')}</b>
                </p>
                <Divider />
                <p>{i18n.t('who_we_are')}</p>
                <p>{i18n.t('highlights')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('technologies')}</b>
                </p>
                <Divider />
                <p>{i18n.t('visibility')}</p>
                <p>{i18n.t('automation')}</p>
                <p>{i18n.t('compliance')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('solutions')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Network Visibility Suite')}</p>
                <p>{i18n.t('IPAM')}</p>
                <p>{i18n.t('Discovery & Inventory')}</p>
                <p>{i18n.t('Peta Scale Logger')}</p>
                <p>{i18n.t('LOTT IoT Platform')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('expertise')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Networking Technologies')}</p>
                <p>{i18n.t('Big Data Technologies')}</p>
                <p>{i18n.t('Cisco Devnet')}</p>
                <p>{i18n.t('DPI')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('career')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Why should you work with us?')}</p>
                <p>{i18n.t('The Selection Process')}</p>
                <p>{i18n.t('Life at Skyz')}</p>
              </Col>
              <Col md={4}>
                <p>
                  <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('contact')}</b>
                </p>
                <Divider />
                <p>{i18n.t('Adress')}</p>
                <p>{i18n.t('Group Companies')}</p>
                <p>
                  <a href="mailTo:info@sekomyazilim.com.tr">info@sekomyazilim.com.tr</a>
                </p>
                <p>
                  0216 316 0103 <Icon type="phone" />
                </p>
                <p>
                  0216 316 0109 <Icon type="printer" />
                </p>
              </Col>
            </Row>
            <Divider style={{ margin: '12px 0', background: 'gray' }} />
            <Row className="contentBlock" style={{ color: '#fff' }}>
              <Col md={12}>
                <a
                  href="https://www.linkedin.com/company/sekom-yazilim?trk=job_view_topcard_company_name"
                  target="_blank"
                >
                  <Icon style={{ fontSize: '24px' }} type="linkedin" />
                </a>
              </Col>
              <Col md={4}>
                <a href={gp_file} target="_blank">
                  Gizlilik Politikası
                </a>
              </Col>
              <Col md={4}>
                <a href={kvkk_a} target="_blank">
                  KVKK Aydınlatma Metni
                </a>
              </Col>
              <Col md={4}>
                <a href={kvkk_b} target="_blank">
                  KVKK Kişi Başvuru Formu
                </a>
              </Col>
            </Row>
          </Fragment>
        </Footer>
      </Layout>
    );
  }
}

export default GlobalLayout;
