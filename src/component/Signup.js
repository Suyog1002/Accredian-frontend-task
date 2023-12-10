import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container, Box, TextField, Button, Typography,Avatar,Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Signup = () => {
    const defaultTheme = createTheme();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const navigate = useNavigate();
   
    const handleSubmit = (event) => {
        event.preventDefault();;
        
            axios.post('http://localhost:8000/signup', values)
                .then(res => { 
                    if (res.data.Status === "Success") {
                        navigate('/');
                    } else {
                        alert("Error from server");
                    }
                 })
                .catch(err => {console.log(err)});
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
            <Paper elevation={24} style={{height:"100vh",width:400,margin:"20px auto", padding: 20}}>
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
                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bold' }}>
                        Sign-Up
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            type='name'
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoFocus
                            onChange={e => setValues({...values,name:e.target.value})} 
                        />
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmpassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmpassword"
                            onChange={e => setValues({...values,confirmpassword:e.target.value})}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Typography style={{ marginTop: '10px', textAlign: 'center' }}>
                            You are agree to your terms and policies.
                        </Typography>
                        <Link to="/" >
                            <Button
                                fullWidth
                                variant="outlined"
                                style={{ marginTop: '10px' }}>
                                Log-In
                            </Button>
                        </Link>

                    </form>
                </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default Signup