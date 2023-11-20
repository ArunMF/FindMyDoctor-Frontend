import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function DoctCard({doctors}) {

  console.log(doctors);
  
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doctors.photo_url} height='200px'/>
      <Card.Body>
        <Card.Title><h4>{doctors.name}</h4></Card.Title>
        <Card.Text>
          <p>{doctors.specialization}</p>
          <p style={{fontWeight:'500'}}>{doctors.hospital}</p>
        </Card.Text>
        <Link to={`/View-Doctor/${doctors.id}`}>
            <Button variant="primary">View Doctor</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DoctCard