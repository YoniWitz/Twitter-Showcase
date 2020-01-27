import React from 'react'
import Media from 'react-bootstrap/Media'
import Image from 'react-bootstrap/Image'

function MyCard(props) {
  let name = props.data.name;
  let screen_name = props.data.screen_name;
  let text = props.data.text;
  let date = props.data.created_at;
  let src = props.data.image;
  let retweet_count = props.data.retweet_count;
  let favorite_count = props.data.favorite_count;

  let mediaStyle = {
    backgroundColor: "white",
    border: ".51px solid blue",
    marginTop: '5px',
    fontFamily: "sans serif"
  };

  let imageStyle = {
    width: "50px",
    height: "50px",
    marginTop: "1px",
    marginLeft: '1px'
  }

  return (
    <main>
      <Media style={mediaStyle}>
        <Image alt="Generic placeholder" src={src} className="mr-3" style={imageStyle} />
        <Media.Body style={{ textAlign: 'left' }}>
          <h5 className="fas">{name} <small> @{screen_name} <i> {date}</i></small></h5>
          <p>
            {text}
          </p>
          <small className="fas fa-heart"> {favorite_count}&nbsp;&nbsp;</small>
          <small className="fas fa-retweet"> {retweet_count}</small>
        </Media.Body>
      </Media>
    </main>
  )
}

export default MyCard