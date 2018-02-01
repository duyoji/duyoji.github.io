import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Table
} from 'reactstrap';

class CareerPage extends Component {
  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col className="text-center" sm="12" md={{ size: 8, offset: 2 }}>
            <h5>経歴</h5>
            <Table>
              <tbody>
                <tr>
                  <th>現在</th>
                  <td>フリーランスエンジニアとして主に開発系の案件やプログラミング教育・コンサルに従事。</td>
                </tr>
                <tr>
                  <th>2014 - 2016</th>
                  <td>株式会社ミクシィにてエンジニアとしてコミュニティサービスの保守・運用やユーザーを増やすための施策、JavaScriptのコードレビューの責任者に従事。</td>
                </tr>
                <tr>
                  <th>2012 - 2014</th>
                  <td>株式会社ソニックムーブにてエンジニアとして新規事業部でWebアプリやスマホアプリの開発に従事。</td>
                </tr>
                <tr>
                  <th>2010 - 2012</th>
                  <td>大学在学時に株式会社エウレカにてインターンとして入り、そこでプログラミングを覚える。主にiPhone, Androidアプリの開発に従事し、KDDI ∞(無限) Laboの2期としてサービスが採択され、KDDI ∞ Laboでベストエンジニア賞を獲得。</td>
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

export default CareerPage;