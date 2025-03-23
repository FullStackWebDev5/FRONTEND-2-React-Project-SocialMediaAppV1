import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Profile = () => {
  return (
    <div className='text-center'>
      <h1 className='display-4 my-2'>
        Profile
      </h1>
      <Card style={{ 
        width: '18rem', 
        margin: '10px auto' 
      }}>
        <Card.Img 
          variant="top" 
          src="https://reqres.in/img/faces/2-image.jpg"
          style={{
            width: '10rem',
            height: '10rem',
            margin: '1em auto',
            borderRadius: '50%',
            border: '5px solid rgb(33, 37, 41)'
          }} />
        <Card.Body>
          <Card.Title>Janet Weaver</Card.Title>
          <Card.Text>
            <Badge bg="dark">@janetweaver</Badge>
          </Card.Text>
          <Card.Text 
            className='py-1 px-2'
            style={{
              border: '1px solid black',
              width: 'max-content',
              margin: '1em auto',
              borderRadius: '5px'
            }}
          >
            2.3M Followers
          </Card.Text>
          <Card.Text>
          Hey there! Just a digital wanderer exploring life, one post at a time. 🌍✨
          Tech enthusiast 💻 | Coffee addict ☕ | Meme lover 🤣 | Music on repeat 🎵
          📍 Living in the moment, one scroll at a time. #StayCurious 🚀 
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Birthday: 01-01-1995</ListGroup.Item>
          <ListGroup.Item>City: New York</ListGroup.Item>
          <ListGroup.Item>Profile type: Private</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default Profile