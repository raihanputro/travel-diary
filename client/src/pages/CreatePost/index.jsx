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

const CreatePost = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[img, setImg] = useState('');
  const[title, setTitle] = useState('');
  const[shortDesc, setShortDesc] = useState('');
  const[description, setDescription] = useState('');

  const onSubmit = () => {
    dispatch(setCreatePost({ imageUrl: img, title: title, shortDesc: shortDesc, description: description })),
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
            <input ref={ref} value={img} onChange={(e) => setImg(e.target.value)} type='file' hidden accept='image/*'/>
          </Box>
        </Box>
        <Box className={classes.inputContainer}>
          <FormLabel className={classes.label}>Title</FormLabel>
          <TextField sx={{ input: { color: 'black' } }} className={classes.inputTitle} variant="outlined" type='text' value={title} onChange={(e) => setTitle(e.target.value)} required={true}/>
        </Box>
        <Box className={classes.inputContainer}>
          <FormLabel className={classes.label}>Short Description</FormLabel>
          <TextField sx={{ input: { color: 'black' } }} className={classes.inputShortDescTitle} variant="outlined" type='text' value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} required={true}/>
        </Box>
        <Box className={classes.inputContainer}>
          <FormLabel className={classes.label}>Description</FormLabel>
          <ReactQuill theme='snow' value={description} onChange={(value) => setDescription(value)} className={classes.inputDesc}/>
        </Box>
      </Box>
      <Box className={classes.buttonContainer}>
        <Button className={classes.postButton} onClick={onSubmit}>Post</Button>
      </Box>
    </Box>
  )
}

// const mapStateToProps = createStructuredSelector({
//   token: selectToken
// })

export default CreatePost;