import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col
} from 'reactstrap';


const sectionItems = [
  {
    title: 'automationとは?',
    texts: [
      'コンピュータに任せられることはコンピュータに任せ、自動化（automation）が進んでいくことによって生活がもっと便利になり、人間は人間にしか出来ないクリエイティブなことに専念出来る世の中になったら良いなという願いからつけた名前（屋号）です。'
    ],
    links: [
      {
        url: '/profile',
        text: 'プロフィール'
      }
    ]
  },
  {
    title: 'お仕事の依頼',
    texts: [
      'Webアプリの開発、自動化ツールの開発、ITコンサル（主に開発系）など受け付けております。',
      '少しでも気になることがありましたら無料で相談、お見積を致しますのでお気軽にご連絡を頂けたらと思います。',
    ],
    links: [
      {
        url: '/contact',
        text: 'お問い合わせ > E-mail'
      }
    ]
  },
  {
    title: '【課外活動】無料プログラミング教育・相談',
    texts: [
      '「プログラミングに興味あるけど何から初めたら良いのかわからない。」、「〇〇の実装でわからないところがあるから教えて欲しい。」、「全く別の業界で働いているが、IT業界に転職を考えているが実際のところIT業界ってどんな働き方しているの？」などと言った質問や相談などに無料で対応しています。（カフェの場合はコーヒー代1杯を頂戴してます。）',
      '学習・開発・相談などございましたらお気軽にご連絡を頂けたらと思います。',
    ],
    links: [
      {
        url: '/contact',
        text: 'お問い合わせ > E-mail'
      }
    ]
  },
];

class HomePage extends Component {
  render() {
    return (
      <Container>
        {sectionItems.map((item, index) => {
          return (
            <Row className="mb-5" key={index}>
              <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
                <h2 className="mb-3">{item.title}</h2>
                {item.texts.map((text, index) => {
                  return <p key={index}>{text}</p>
                })}

                {item.links && item.links.map((link, index) => {
                  return (
                    <Link to={link.url} key={index}>
                      {link.text}
                    </Link>
                  );
                })}
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}


export default HomePage;