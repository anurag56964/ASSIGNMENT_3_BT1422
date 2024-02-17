import React from 'react';
import Card from 'react-bootstrap/Card';

export default function PageHeader({text}) {
    return (
      <>
        <Card className='bg-light'>
            <Card.Body>
            <b>{text}</b>
            </Card.Body>
        </Card>
        <br />
    </>
  );
}
