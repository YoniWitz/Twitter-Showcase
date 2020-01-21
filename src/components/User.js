import React from 'react'
import Button from 'react-bootstrap/Button'
import { Form, Row, Col } from 'react-bootstrap'

function User() {
    return (
        <Form>
            <Row>
                <Col></Col>
                <Form.Group>
                    <Col>
                        <Form.Control type="text" placeholder="Enter Keyword" />
                        <Button variant="primary" type="submit">Search</Button>
                    </Col>
                </Form.Group>
                <Col></Col>
            </Row>
        </Form>
    )
}

export default User