import React, { Component } from 'react';
import profileSrc from '../images/profile.jpeg';
import '../styles/ProfilePage.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class ProfilePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <img className="profile-image" src={profileSrc} alt="profileSrc" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <h2>Tsuyoshi Maeda</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilePage;