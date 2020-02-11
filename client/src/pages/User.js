import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import TwitterCard from '../components/TwitterCard'
import axios from 'axios'


function User() {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        axios
            .get(`/api/tweets/search/${search}`)
            .then(response => setCards(response.data))
            .catch(error => console.error(error.message));
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    let renderCards = cards.map(data => <TwitterCard key={data.id} data={data} />);
    let isDisabled = !search.length;

    return (
        <main>
            <Row>
                <Col></Col>
                <Col>
                    <input                      
                        onChange={handleChange}
                        value={search}
                        type="text"
                        placeholder="Enter Keyword To Search" />
                    <Button
                        style={{ marginTop: "10px", text: "center" }}
                        disabled={isDisabled}
                        onClick={handleSubmit}
                        variant="primary">Search
                    </Button>
                </Col>
                <Col></Col>
            </Row>
            {renderCards}
        </main >
    )
}

export default User