import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import MyCard from './MyCard'
import axios from 'axios'

function User() {
    const [cards, setCards] = useState([{ id: 2, title: "title1", text: "text1", small: "small1", src: "pic1.gif" }])
    const [search, setSearch] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
       axios.get('http://localhost:3001')     
            .then(response =>
                console.log(response.data)
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
    useEffect(() => {
        let newElement = {
            id: 1,
            title: "title",
            text: "text",
            small: "small"
        }
        setCards(prevCards => [...prevCards, newElement])
    }, [])

    let renderCards = cards.map(data => <MyCard key={data.id} data={data} />);

    return (
        <main>
            <Form>
                <Row>
                    <Col></Col>
                    <Form.Group>
                        <Col>
                            <Form.Control onChange={handleChange} value={search} type="text" placeholder="Enter Keyword" />
                            <Button onClick={handleSubmit} variant="primary" >Search</Button>
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