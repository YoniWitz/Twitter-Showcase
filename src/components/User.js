import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import MyCard from './MyCard'

function User() {
    return (
        <main>
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
            <MyCard />
        </main>
    )
}

export default User