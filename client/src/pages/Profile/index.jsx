import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import CardPost from '@components/Card';
import profileIcon from '../../../public/profile1.png';
import card1 from '../../../public/card1.png';

import classes from './style.module.scss';

const Profile = () => {
  return (
    <Box className={classes.container}>
      <Typography variant='h1' component='div' className={classes.pageTitle}>
        Profile
      </Typography>
      <Box className={classes.contentContainer}>
        <img src={profileIcon} className={classes.imgProfile}/>
        <Typography variant='h1' component='div' className={classes.userName}>
          Iqbal
        </Typography>
        <Typography variant='p' component='div' className={classes.email}>
          fadhil@gmail.com
        </Typography>
        <Button className={classes.postButton}>Add New Post</Button>
        <Box className={classes.cardContainer}>
          <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
          <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
          <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
          <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
          <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
          <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
          <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        </Box>
      </Box>
    </Box>
  )
}

export default Profile