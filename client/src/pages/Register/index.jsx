import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect,useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

import { encryptPayload } from '@utils/encryptPayload';
import { setUserRegister } from './action';

import classes from './style.module.scss';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
       dispatch(setUserRegister({ fullname: encryptPayload(fullname), email: encryptPayload(email), password: encryptPayload(password)})),
       navigate('/login')
    };

  return (
    <>
        <Box className={classes.container}>
            <Card component={Box} className={classes.cardContainer}>
                <CardContent>
                    <Typography variant='h1' component='div' className={classes.pageTitle} >
                        <FormattedMessage id="app_register_title" />
                    </Typography>
                    <FormControl className={classes.formContainer}>
                        <Box className={classes.inputLabelContainer}>
                            <FormLabel className={classes.label}>Full Name</FormLabel>
                            <TextField className={classes.input} variant="outlined" type='text' value={fullname} onChange={(e) => setFullName(e.target.value)} required={true}/>
                        </Box>
                        <Box className={classes.inputLabelContainer}>
                            <FormLabel className={classes.label}>Email</FormLabel>
                            <TextField className={classes.input} variant="outlined" type='text' value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
                        </Box>
                        <Box className={classes.inputLabelContainer}>
                            <FormLabel className={classes.label}>Password</FormLabel>
                            <TextField className={classes.input} variant="outlined" type='text' value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
                        </Box>
                    </FormControl>
                    <Button className={classes.registerButton} onClick={onSubmit}> Register</Button>
                </CardContent>  
            </Card>
        </Box>
    </>
  )
}

export default Register