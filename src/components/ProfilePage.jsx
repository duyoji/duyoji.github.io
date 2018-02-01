import React, { Component } from 'react';
import profileSrc from '../images/profile.jpeg';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.css'
import '../styles/ProfilePage.css';
import '../styles/fa-social-color.css';

class ProfilePage extends Component {
  render() {
    return (
      <Container>
        <Row className="mb-1">
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <img className="profile-image" src={profileSrc} alt="profileSrc" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <h4>前田 剛 / フリーランスエンジニア</h4>
            <Link to="/career">経歴</Link>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <h5>スキル</h5>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <p>JavaScript, Express, React, Redux, Vue, TypeScript, Sequelize, knex, TDD, MySQL, PostgreSQL, Redis, PHP, CakePHP, AWS, Heroku, Git, Java, Objective-C, Perl, HTML, CSS など（LinkedInにもっと細かくスキルの他に職歴なども載せてます。）</p>
          </Col>
        </Row>

        <Row className="mb-1">
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <h5>SNSアカウント</h5>
          </Col>
        </Row>

        { renderFaIcons() }
      </Container>
    );
  }
}

const renderFaIcons = () => {
  const faItemsList = [
    [
      {
        name: 'linkedin-square',
        link: 'https://www.linkedin.com/in/tsuyoshi-maeda-96030b30/'
      },
      {
        name: 'github-square',
        link: 'https://github.com/duyoji'
      },
      {
        name: 'slideshare',
        link: 'https://www.slideshare.net/tsuyoshimaeda56'
      }
    ],
    [
      {
        name: 'twitter-square',
        link: 'https://twitter.com/duyoji'
      },
      {
        name: 'facebook-square',
        link: 'https://www.facebook.com/tsuyoshi.maeda.56'
      },
      // Added empty data for layout
      {
        name: '',
        link: ''
      },
    ],
  ];
  const linkStyle = {
    textDecorations: 'none',
    color: 'inherit'
  }

  return faItemsList.map((faItems, index) => {
    return (
      <Row key={index} className="mb-2">
        {faItems.map((faItem, index) => {
          return (
            <Col className="text-center" key={index}>
              <a
                href={faItem.link}
                style={linkStyle}
                target="_blank">
                <FontAwesome
                  className="super-crazy-colors"
                  name={faItem.name}
                  size="5x"
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
              </a>
            </Col>
          );
        })}
      </Row>
    );
  });
};

export default ProfilePage;