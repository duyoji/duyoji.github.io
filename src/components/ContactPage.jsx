import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Table
} from 'reactstrap';

class ContactPage extends Component {
  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <h5>事業概要</h5>
            <Table>
              <tbody>
                <tr>
                  <th>屋号</th>
                  <td>automation</td>
                </tr>
                <tr>
                  <th>代表</th>
                  <td>前田 剛</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>Webアプリ・自動化ツール開発、プログラミング教育、ITコンサル</td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td><a href="mailto:tsuyoshi4business@gmail.com">tsuyoshi4business@gmail.com</a></td>
                </tr>
                {/* 最後のtr,tdは最後の行の下にボーダーをつけるためだけにセットしている。 */}
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactPage;