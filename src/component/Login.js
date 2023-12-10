import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container, Box, TextField,Button, Typography,Avatar,Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const defaultTheme = createTheme();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    
    axios.defaults.withCredentials=true;
    const handleSubmit = (event) => {
        event.preventDefault();
            axios.post('http://localhost:8000/login', values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        navigate('/home');
                    } else {
                        alert("Invalid User");
                    }
                })

                .catch(err => console.log(err));
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
            <Paper elavation={24}  style={{height:'80vh',width:400,margin:"20px auto", padding: 20}}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{fontWeight: 'bold'}}>
                        Sign-In
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            type='email'
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            onChange={e => setValues({...values,email:e.target.value})} 
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={e => setValues({...values,password:e.target.value})}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log In
                        </Button>
                        <Typography style={{ marginTop: '10px', textAlign:'center' }}>
                            You are agree to your terms and policies.
                        </Typography>
                        <Link to="/signup" >
                            <Button
                                fullWidth
                                variant="outlined"
                                style={{ marginTop: '10px' }}>
                                Create Account
                            </Button>
                        </Link>

                    </form>
                </Box>
                </Paper>
            </Container>
        </ThemeProvider>

    )
}

export default Login