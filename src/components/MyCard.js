import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

function MyCard(props) {
  let title = props.data.title;
  let text = props.data.text;
  let small = props.data.small;
  let src = props.data.src;

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
            <small className="text-muted">{small}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </main>
  )
}

export default MyCard