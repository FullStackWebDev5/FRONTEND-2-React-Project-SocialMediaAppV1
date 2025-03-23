import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ConnectionCard({
  name,
  profilePicNo,
  mutualFriendCount,
  isSuggestion
}) {

  // Create dummy mutual friends array
  const mutualFriends = []
  while(mutualFriends.length < 3) { 
    let randomNo = Math.ceil(Math.random()*11)
    if(randomNo == profilePicNo || mutualFriends.includes(randomNo)) {
      continue
    }
    mutualFriends.push(randomNo)
  }

  return (
    <Card 
      className='d-flex flex-row mt-2'>
      <Card.Img 
        src={`https://reqres.in/img/faces/${profilePicNo}-image.jpg`}
        style={{ 
          borderRadius: '0.375rem 0 0 0.375rem',
          minWidth: '200px',
          width: '200px'
        }}
      />
      <Card.Body
        className='d-flex flex-column justify-content-between'
      >
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='text-muted'>
            {mutualFriendCount} mutual friends
          </Card.Text>
          <Card.Text 
            className='d-flex'
            style={{ marginLeft: '5px'}}
          >
            {mutualFriends.map((picNo, index) => (
              <img 
                key={index}
                src={`https://reqres.in/img/faces/${picNo}-image.jpg`} 
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  marginLeft: '-5px'
                }}
              /> 
            ))}
            <div
              className='p-1'
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                marginLeft: '-5px',
                backgroundColor: 'lightgray',
                fontSize: '10px'
              }}
            >
              +{mutualFriendCount - 3}
            </div>
          </Card.Text>
        </div>
        <div className='d-flex gap-2'>
          <Button
            className='w-100'
            variant="dark"
          >
            {isSuggestion ? 'Follow' : 'Accept'}
          </Button>
          <Button
            className='w-100'
            variant="secondary"
          >Ignore</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ConnectionCard;