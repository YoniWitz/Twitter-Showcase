import React, { useState, useEffect } from 'react'
import MyCard from './MyCard'
import axios from 'axios'

function User() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/api/tweets/search/random`)
            .then(response =>
                setCards(response.data)
            )
            .catch(error =>
                console.log(error.message)
            )
    }, [])

    let renderCards = cards.map(data => <MyCard key={data.id} data={data} />);

    return (
        <main>
            {renderCards}
        </main>
    )
}

export default User