import React from 'react';
import i18n from '../../i18n';
import { Row, Col, Card, Icon } from 'antd';
import banner1 from '../../assets/creer_zeminsiz.png';
import card1 from '../../assets/cardImage.jpg';
import card2 from '../../assets/cardImage2.png';
import card3 from '../../assets/cardImage3.png';
import card4 from '../../assets/cardImage4.png';

class Career extends React.Component {
  state = {
    currentStep: 0,
    screenWidth: window.innerWidth,
  };

  updateWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    let isMd = false;
    if (this.state.screenWidth < 1200) {
      isMd = true;
    }
    return (
      <div id="career" className="homeDiv">
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span className="highlightsHeader">{i18n.t('career')}</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="doubleBannerDiv">
          <img src={banner1} className="bannerImage" />
        </div>
        <Row className="contentBlock">
          <Row className="subtitleRow">
            <Col span={8} className="subtitleRowDivider" />
            <Col span={8} className="subtitleMiddleDiv">
              <span className="subtitleSpan">{i18n.t('Why Work With Us?')}</span>
            </Col>
            <Col span={8} className="subtitleRowDivider" />
          </Row>
          <Col lg={8}>
            <div className="cardHeader">New Technologies</div>
            <Card className="redHomeCard" bodyStyle={{ height: '190px', minHeight: '190px' }}>
              As an R&D company, we always follow up new technologies to provide our customers best
              of the breed solutions in the market.
            </Card>
          </Col>
          <Col lg={8}>
            <div className="cardHeader">Friendly & Dynamic Work Environment</div>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '190px', minHeight: '190px', overflow: 'hidden' }}
            >
              <p>
                Our positive work environment and friendly atmosphere are the most important values
                of our company.
              </p>
              <p>We don’t force our employee to work, we motivate them to love their work.</p>
            </Card>
          </Col>
          <Col lg={8}>
            <div className="cardHeader">Private Life & Work-Life Balance</div>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '190px', minHeight: '190px', overflow: 'hidden' }}
            >
              <p>
                Our team is able to deliver great results because we emphasize the importance of a
                good work / life balance, and take time to have fun together as a team.
              </p>
            </Card>
          </Col>
          <Col lg={8}>
            <div className="cardHeader">Career Model</div>
            <Card className="redHomeCard" bodyStyle={{ height: '190px', minHeight: '190px' }}>
              <p>
                We provide our employees with a good career model and give them a chance to change
                their profession according to their talents.
              </p>
            </Card>
          </Col>
          <Col lg={8}>
            <div className="cardHeader">We help each other right from the start</div>
            <Card
              className="redHomeCard"
              bodyStyle={{ height: '190px', minHeight: '190px', overflow: 'hidden' }}
            >
              <p>
                We introduce a body-model for our new employees. We assign a body employee for each
                new employee to accelerate and facilitate their adaption to our company and to help
                them right from the start.
              </p>
            </Card>
          </Col>
          <Col lg={8}>
            <div className="cardHeader">Creativity & New Business Ideas</div>
            <Card className="redHomeCard" bodyStyle={{ height: '190px', minHeight: '190px' }}>
              <p>
                We support new technologies, innovations, and ideas - help them go to market. We
                also reward R&D ideas of our workers and make regular meetings to support new
                projects.
              </p>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }} className="contentBlock">
          <Row className="subtitleRow">
            <Col span={8} className="subtitleRowDivider" />
            <Col span={8} className="subtitleMiddleDiv">
              <span className="subtitleSpan">{i18n.t('The Selection Process')}</span>
            </Col>
            <Col span={8} className="subtitleRowDivider" />
          </Row>
          <Col xl={7} md={24}>
            <Card className="homeCard" bodyStyle={{ height: '240px', minHeight: '240px' }}>
              <div>Application</div>
              <div style={{ marginBottom: '14px' }}>
                <Icon style={{ fontSize: '32px' }} type="form" />
              </div>
              Are you interested in an open position or would like to work with us? Send us your
              resume with a brief description of the role that you apply.
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>Evaluation</div>
              <div style={{ marginBottom: '14px' }}>
                <Icon style={{ fontSize: '32px' }} type="file-search" />
              </div>
              We may send you a questionnaire for a deeper evaluation of your profile.
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>Telephone Interview</div>
              <div style={{ marginBottom: '14px' }}>
                <Icon style={{ fontSize: '32px' }} type="phone" />
              </div>
              Do you meet the requirements? Please expect a phone call from us through which we want
              to get to know you a little better, ask for some complementary information not
              included in your resume and verify the technical and language skills you indicated
            </Card>
          </Col>
          {isMd ? (
            <Col xl={1} md={24}>
              <Icon
                style={{
                  fontSize: '36px',
                  marginTop: '25px',
                  marginBottom: '25px',
                  color: 'rgba(0,0,0,0.7)',
                }}
                type="down"
              />
            </Col>
          ) : null}
          <Col xl={7} md={24}>
            <Card className="homeCard" bodyStyle={{ height: '240px', minHeight: '240px' }}>
              <div>Face-to-face interview</div>
              <div style={{ marginBottom: '14px' }}>
                <Icon style={{ fontSize: '32px' }} type="message" />
              </div>
              <p>
                If you've successfully managed the telephone call, we are happy to meet you in
                person. It will be a technical interview so be prepared for technical questions.
              </p>
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card
              className="homeCard"
              bodyStyle={{ height: '240px', minHeight: '240px', overflow: 'hidden' }}
            >
              <div>Reference Check</div>
              <div style={{ marginBottom: '14px' }}>
                <Icon style={{ fontSize: '32px' }} type="file-done" />
              </div>
              <p>We make a reference check</p>
            </Card>
          </Col>
          <Col xl={1} md={24}>
            <Icon
              style={{
                fontSize: '36px',
                marginTop: isMd ? '25px' : '102px',
                marginBottom: isMd ? '25px' : '0',
                color: 'rgba(0,0,0,0.7)',
              }}
              type={isMd ? 'down' : 'right'}
            />
          </Col>
          <Col xl={7} md={24}>
            <Card className="homeCard" bodyStyle={{ height: '240px', minHeight: '240px' }}>
              <div>Job Offer</div>
              <div style={{ marginBottom: '14px' }}>
                <Icon style={{ fontSize: '32px' }} type="dollar" />
              </div>
              Successful applicants will receive a written offer letter, including benefits package
              information and detailed job description of the role.
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Career;