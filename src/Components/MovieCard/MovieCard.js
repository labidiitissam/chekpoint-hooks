import ReactStars from "react-rating-stars-component";
import React from 'react'
import { Card , Button } from 'react-bootstrap'

const MovieCard = ({movie}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Button href={movie.trailer} target='blank'>Trailer</Button>
      <ReactStars
      value={movie.rate}
      size={24}
      activeColor="#ffd700"
      edit={false}
    />
    
    </Card.Body>
  </Card>
    </div>
  )
}

export default MovieCard
