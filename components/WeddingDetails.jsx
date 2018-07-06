import React from 'react'
import { Container, Row, Col} from 'reactstrap'
const WeddingDetails = ({title, subtitle, meta, content}) => (
  <Row>
    <Col xs='3'></Col>
      <h2 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: '800', fontSize: '36px'}}>The Ashford Estate</h2>
      <h3 style={{ fontFamily: 'Open Sans, sans-serif'}}> {subtitle} </h3>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500'}}> {meta} </p>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500'}}> {content} </p>
    <col xs='3'></col>
  </Row>
)

export default WeddingDetails