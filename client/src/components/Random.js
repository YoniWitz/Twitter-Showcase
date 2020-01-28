import React, { useState, useEffect } from 'react'
import MyCard from './MyCard'
import axios from 'axios'
import { Button, Form, Row, Col } from 'react-bootstrap'

function User() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get(`/api/tweets/random`)
            .then(response =>
                setCards(response.data)
            )
            .catch(error =>
                console.log(error.message)
            )
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        axios.get(`http://localhost:3001/api/tweets/random`)
            .then(response =>
                setCards(response.data)
            )
            .catch(error =>
                console.log(error.message)
            )
    }

    let renderCards = cards.map(data => <MyCard key={data.id} data={data} />);

    return (
        <main>
            <Form onSubmit={handleSubmit} style={{marginTop:"10px"}}>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button variant="info" onClick={handleSubmit}>Generate Tweets from my Top 5 People</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Form>           
            {renderCards}           
        </main>
    )
}

export default User