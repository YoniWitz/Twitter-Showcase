import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import MyCard from './MyCard'
import axios from 'axios'


function User() {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
        axios.get(`/api/tweets/search/${search}`)
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

            <Row>
                <Col></Col>
                <Col>
                    <input
                        onChange={handleChange}
                        value={search}
                        type="text"
                        placeholder="Enter Keyword To Search on Twitter" />
                    <Button
                        style={{ marginTop: "10px" }}
                        disabled={!isEnabled}
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