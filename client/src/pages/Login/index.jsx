import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { encryptPayload } from '@utils/encryptPayload';
import { setUserLogin } from './action';

import classes from './style.module.scss';
import { Button } from '@mui/material';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        dispatch(setUserLogin({ email: encryptPayload(email), password: encryptPayload(password)})),
        navigate('/')
     };

  return (
    <>
        <Box className={classes.container}>
            <Card component={Box} className={classes.cardContainer}>
                <CardContent>
                    <Typography variant='h1' component='div' className={classes.pageTitle} >
                        Login
                    </Typography>
                    <FormControl className={classes.formContainer}>
                        <Box className={classes.inputLabelContainer}>
                            <FormLabel className={classes.label}>Email</FormLabel>
                            <TextField className={classes.input} variant="outlined" type='text' value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
                        </Box>
                        <Box className={classes.inputLabelContainer}>
                            <FormLabel className={classes.label}>Password</FormLabel>
                            <TextField className={classes.input} variant="outlined" type='text' value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
                        </Box>
                    </FormControl>
                    <Button className={classes.loginButton} onClick={onSubmit}> Login</Button>
                    <Typography variant='h1' component='div' className={classes.linkRegister} >
                        Don't have an account? ? klik <b className={classes.here} onClick={() => navigate('/register')}>Here</b>
                    </Typography>
                </CardContent>  
            </Card>
        </Box>
    </>
  )
}

export default Login