import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Badge } from 'react-bootstrap'
import ConnectionCard from './ConectionCard'

function Connections() {
  const invitations = [
    {
      name: 'John Doe',
      profilePicNo: 5,
      mutualFriendCount: 8
    },
    {
      name: 'Jane Smith',
      profilePicNo: 6,
      mutualFriendCount: 12
    },
    {
      name: 'Emily Thompson',
      profilePicNo: 7,
      mutualFriendCount: 5
    }
  ]

  const suggestions = [
    {
      name: 'Kiran Nyayapati',
      profilePicNo: 1,
      mutualFriendCount: 4
    },
    {
      name: 'Priyanka Adhikari',
      profilePicNo: 2,
      mutualFriendCount: 7
    }
  ]

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item 
              action 
              href="#link1"
              variant="secondary"
              className='d-flex justify-content-between align-items-center'
            >
              Invitations
              <Badge pill bg="secondary">
                {invitations.length}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              href="#link2"
              variant="secondary"
              className='d-flex justify-content-between align-items-center'
            >
              Suggestions
              <Badge pill bg="secondary">
                {suggestions.length}
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <h6 className='display-6'>Invitations</h6>
              {invitations.map((inv, index) => (
                <ConnectionCard
                  key={index}
                  name={inv.name}
                  profilePicNo={inv.profilePicNo}
                  mutualFriendCount={inv.mutualFriendCount}
                />
              ))}
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <h6 className='display-6'>Suggestions</h6>
              {suggestions.map((sug, index) => (
                <ConnectionCard
                  key={index}
                  name={sug.name}
                  profilePicNo={sug.profilePicNo}
                  mutualFriendCount={sug.mutualFriendCount}
                  isSuggestion={true}
                />
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Connections;