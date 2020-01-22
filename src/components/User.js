import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import MyCard from './MyCard'

function User() {
    const [cards, setCards] = useState([{id:2, title:"title1", text:"text1", small:"small1", src: "pic1.gif"}])

    useEffect(() => {
        let newElement = {
            id:1,
            title: "title",
            text: "text",
            small: "small"
        }
        setCards(prevCards => [...prevCards, newElement])
    }, [])
    
    let renderCards = cards.map(data => <MyCard key={data.id} data={data} /> );
    
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
            {renderCards}
        </main>
    )
}

export default User