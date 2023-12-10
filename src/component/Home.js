import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  axios.defaults.withCredentials=true;
  useEffect(() => {
    axios.get('http://localhost:8000/home')
      .then(res => {
        console.log(res.data);
        if (res.data.Status === "Success") {
          setAuth(true);
        } else {
          setAuth(false);
          setMessage(res.data.Error)
        }
      })
      .catch(err => console.log(err));
  })
  const handleLogout = () => {
    axios.get('http://localhost:8000')
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  };
  return (
    <Container component="main" maxWidth="xs">
      {auth ?(
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
        <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
          Welcome to the Home Page
        </Typography>
        <Link to='/'>
        <Button fullWidth variant="contained" style={{ marginTop: '10px' }} onClick={handleLogout}>
          Logout
        </Button>
        </Link>
      </Paper>
      ):(
      <Paper>
        <Typography>{message}</Typography>
        <Link to='/'>
          <Button fullWidth variant="contained" style={{ marginTop: '10px' }}>
            Login Now
          </Button>
        </Link>
      </Paper>
      )}
    </Container>
  )
}

export default Home;