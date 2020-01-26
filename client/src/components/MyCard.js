import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

function MyCard(props) {
  let title = props.data.title;
  let text = props.data.text;
  let date = props.data.created_at;
  let src = props.data.image;

  return (
    <main>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={src} alt="pic1.gif" />
          <Card.Body>
             <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{date}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </main>
  )
}

export default MyCard