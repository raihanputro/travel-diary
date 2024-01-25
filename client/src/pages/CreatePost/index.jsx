import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Typography, FormLabel, TextField, Input, Button } from '@mui/material';

import { setCreatePost } from './actions';
import { selectToken } from '@containers/Client/selectors';
import classes from './style.module.scss';

const CreatePost = ({ token }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[ data, setData ] = useState({
    imageUrl: '',
    title: '',
    shortDesc: '',
    description: ''
  });


  const onSubmit = () => {
    const formDataSend = new FormData();
    formDataSend.append("imageUrl", data.imageUrl);
    formDataSend.append("title", data.title);
    formDataSend.append("shortDesc", data.shortDesc);
    formDataSend.append("description", data.description);
    dispatch(setCreatePost(token, formDataSend)),
    navigate('/')
  };


  return (
    <Box className={classes.container}>
      <Typography variant='h1' component='div' className={classes.pageTitle}>
        New Journey
      </Typography>
      <Box className={classes.formContainer}>
        <Box className={classes.inputContainer}>
          <Box className={classes.inputImgContainer}>
            <Button variant="outlined" className={classes.buttonUpload} onClick={() => ref.current.click()}>Upload</Button>
            <input ref={ref} type='file' hidden accept='image/*'/>
          </Box>
        </Box>
        <Box className={classes.inputContainer}>
          <FormLabel className={classes.label}>Title</FormLabel>
          <TextField sx={{ input: { color: 'black' } }} className={classes.inputTitle} variant="outlined" type='text' value={data.title} onChange={(e) => setData(prevVal => ({ ...prevVal, title: e.target.value }))} required={true}/>
        </Box>
        <Box className={classes.inputContainer}>
          <FormLabel className={classes.label}>Short Description</FormLabel>
          <TextField sx={{ input: { color: 'black' } }} className={classes.inputShortDescTitle} variant="outlined" type='text' value={data.shortDesc} onChange={(e) => setData({ shortDesc: e.target.value })} required={true}/>
        </Box>
        <Box className={classes.inputContainer}>
          <FormLabel className={classes.label}>Description</FormLabel>
          <ReactQuill theme='snow' value={data.description} onChange={(value) => setData({ description: value})} className={classes.inputDesc}/>
        </Box>
      </Box>
      <Box className={classes.buttonContainer}>
        <Button className={classes.postButton} onClick={onSubmit}>Post</Button>
      </Box>
    </Box>
  )
}

const mapStateToProps = createStructuredSelector({
  token: selectToken
})

export default connect(mapStateToProps)(CreatePost);