import React, { useState, useEffect } from 'react'
import MyCard from './MyCard'

function Random() {
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
        <main>{renderCards}</main>
    )
}

export default Random