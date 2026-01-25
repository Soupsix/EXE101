import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NotificationBar = () => {
  return (
    <>
        <Container fluid>
            <Row >
                <Col className='d-flex justify-content-center pt-3' style={{backgroundColor: '#6DAF8B', color:'#333333', fontFamily: 'Poppins, sans-serif'}}>
                    <p className='fw-bold'>Hãy để dược liệu chữa lành giúp bạn</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default NotificationBar