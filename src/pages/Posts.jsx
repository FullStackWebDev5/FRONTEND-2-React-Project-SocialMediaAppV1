import { Row } from 'react-bootstrap'
import Post from '../components/Post'
const posts = [
  {
    "id": 1,
    "user": {
      "username": "georgebluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg",
      "isVerified": true
    },
    "image": "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
    "caption": "Exploring the mountains was an unforgettable experience! #nature #hiking #adventure",
    "uploadedTime": "Posted 2 hours ago"
  },
  {
    "id": 2,
    "user": {
      "username": "janetweaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg",
      "isVerified": true
    },
    "image": "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
    "caption": "Delicious homemade pasta for dinner tonight. #cooking #foodie #yum",
    "uploadedTime": "Posted 5 hours ago"
  },
  {
    "id": 3,
    "user": {
      "username": "emmawong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    "image": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8fHww",
    "caption": "Caught this beautiful sunset at the beach. #sunset #ocean #relaxation",
    "uploadedTime": "Posted 1 day ago"
  },
  {
    "id": 4,
    "user": {
      "username": "eveholt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlfGVufDB8fDB8fHww",
    "caption": "Morning coffee with a view. #coffee #morningroutine #peaceful",
    "uploadedTime": "Posted 2 days ago"
  },
  {
    "id": 5,
    "user": {
      "username": "charlesmorris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg",
      "isVerified": true
    },
    "image": "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    "caption": "Enjoying a quiet afternoon reading. #books #relaxation #me-time",
    "uploadedTime": "Posted 3 days ago"
  },
  {
    "id": 6,
    "user": {
      "username": "traceyramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg",
      "isVerified": true
    },
    "image": "https://images.unsplash.com/photo-1534235826754-0a3572d1d6d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",
    "caption": "A day well spent at the art museum. #art #culture #inspiration",
    "uploadedTime": "Posted 4 days ago"
  },
  {
    "id": 7,
    "user": {
      "username": "michaelbluth",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    "image": "https://images.unsplash.com/photo-1587777803265-2942d48153ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdW50cnlzaWRlfGVufDB8fDB8fHww",
    "caption": "Weekend getaway to the countryside. #travel #nature #escape",
    "uploadedTime": "Posted 5 days ago"
  },
  {
    "id": 8,
    "user": {
      "username": "lindsayferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    "image": "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    "caption": "Learning to play the guitar. #music #hobbies #newskills",
    "uploadedTime": "Posted 6 days ago"
  },
  {
    "id": 9,
    "user": {
      "username": "tobiasfunke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg",
      "isVerified": true
    },
    "image": "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eSUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    "caption": "City lights at night are mesmerizing. #cityscape #nightphotography #urban",
    "uploadedTime": "Posted 1 week ago"
  },
  {
    "id": 10,
    "user": {
      "username": "byronfields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    "image": "https://plus.unsplash.com/premium_photo-1668784197038-072eff0d0c12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D",
    "caption": "Baking cookies on a rainy day. #baking #comfortfood #rainyday",
    "uploadedTime": "Posted 8 days ago"
  },
  {
    "id": 11,
    "user": {
      "username": "georgeedwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    "image": "https://images.unsplash.com/photo-1608805751283-d75105b983d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlraW5nJTIwZm9yZXN0fGVufDB8fDB8fHww",
    "caption": "Hiking adventures in the forest. #hiking #adventure #naturelover",
    "uploadedTime": "Posted 9 days ago"
  },
  {
    "id": 12,
    "user": {
      "username": "rachelhowell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg",
      "isVerified": true
    },
    "image": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    "caption": "Practicing yoga to find inner peace. #yoga #mindfulness #wellness",
    "uploadedTime": "Posted 10 days ago"
  }
]

const Posts = () => {
  return (
    <>
      <h1 className='display-4 my-2'>
        Posts
      </h1>
      <hr />
      <Row>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Row>
    </>
  )
}

export default Posts