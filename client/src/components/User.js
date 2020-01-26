import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import MyCard from './MyCard'
import axios from 'axios'

function User() {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
        axios.get(`http://localhost:3001/api/tweets/search/${search}`)
            .then(response =>
                setCards(response.data)
            )
            .catch(error =>
                console.log(error.message)
            )
    }

    function handleChange(event) {
        let { value } = event.target;
        setSearch(value);
        console.log(search);
    }

    let renderCards = cards.map(data => <MyCard key={data.id} data={data} />);
    let isEnabled = search.length
    return (
        <main>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col></Col>
                    <Form.Group>
                        <Col>
                            <Form.Control onChange={handleChange} value={search} type="text" placeholder="Enter Keyword" />
                            <Button type="submit" disabled={!isEnabled} variant="primary">Search</Button>
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