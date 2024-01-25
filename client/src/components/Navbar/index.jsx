import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';

import { selectLogin } from '@containers/Client/selectors';
import { setLogin, setToken } from '@containers/Client/actions';
import LogoIcon from '../../../public/logoIconWhite.png';
import logoIconLogin from '../../../public/logoIcon.png';
import PhuketBg from '../../../public/Phuket1.png';

import classes from './style.module.scss';
import { createStructuredSelector } from 'reselect';

const Navbar = ({ login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const sideNavbar = (
    <Box className={classes.buttonContainer}>
      <Button variant="outlined" className={classes.buttonLogin} onClick={() => navigate('/login')}>Login</Button>
      <Button variant="outlined" className={classes.buttonRegister} onClick={() => navigate('/register')}>Register</Button>
    </Box>
  );

  const sideNavbarLogin = (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
          <MenuItem onClick={() => {handleCloseUserMenu, navigate('/profile')}}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem onClick={() => {handleCloseUserMenu, navigate('/create')}}>
            <Typography textAlign="center">New Journey</Typography>
          </MenuItem>
          <MenuItem onClick={() => {handleCloseUserMenu, navigate('/bookmark')}}>
            <Typography textAlign="center">Bookmark</Typography>
          </MenuItem>
          <MenuItem onClick={() => { handleCloseUserMenu, dispatch(setLogin(false)), dispatch(setToken(null)) }}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
      </Menu>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position= {login ? "static" : "absolute" } sx={{ background: login ? 'white' : 'transparent' , boxShadow: login ? '0px 4px 36px 0px rgba(0, 0, 0, 0.25)' : 'none' }} className={classes.navbarContainer}>
        <Toolbar className={classes.navbarHeader}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
            { login ?  <img src={logoIconLogin} /> :  <img src={LogoIcon} />}
          </Typography>
          { login ? sideNavbarLogin : sideNavbar}
        </Toolbar>
      </AppBar>
      {
        login === false && 
        <Box className={classes.jumbotronContainer}>
          <img src={PhuketBg} />
          <Box className={classes.descJumbotronContainer}>
            <h1>The Journey <br /> you ever dreamed of.</h1>
            <p>We made a tool so you can easily keep & share your travel memories. But there is a lot more</p>
          </Box>
        </Box>
      }

    </Box>
  );
};

Navbar.propTypes = {
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});


export default connect(mapStateToProps)(Navbar);
