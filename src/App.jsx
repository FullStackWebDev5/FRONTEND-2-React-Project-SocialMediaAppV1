import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import Posts from './pages/Posts'
import FriendRequests from './pages/FriendRequests'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route 
            path="/" 
            element={<Posts />} 
          />
          <Route 
            path="/friend-requests" 
            element={<FriendRequests />} 
          />
          <Route 
            path="/profile" 
            element={<Profile />} 
          />
          <Route 
            path="/settings" 
            element={<Settings />} 
          />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App