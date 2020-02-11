import React, { useState, useEffect } from 'react'
import TwitterCard from '../components/TwitterCard'
import axios from 'axios'
import { Button, Row, Col } from 'react-bootstrap'

function User() {
    const [cards, setCards] = useState([])

    useEffect(() => {
       handleSearch();
    }, [])

    async function handleSearch(event) {
        if(event)
            event.preventDefault();
        axios
            .get(`/api/tweets/random`)
            .then(response => setCards(response.data))
            .catch(error => console.error(error.message));
    }

    let renderCards = cards.map(data => <TwitterCard key={data.id} data={data} />);

    return (
        <main>
            <Row>
                <Col></Col>
                <Col>
                    <Button variant="info" onClick={handleSearch}>Generate Tweets from my Top 5 People</Button>
                </Col>
                <Col></Col>
            </Row>
            {renderCards}
        </main>
    )
}

export default User