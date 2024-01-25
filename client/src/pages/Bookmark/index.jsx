import React from 'react';
import { Box, Typography } from '@mui/material';

import CardPost from '@components/Card';
import card1 from '../../../public/card1.png';

import classes from './style.module.scss';

const Bookmark = () => {
  return (
    <Box className = {classes.container}>
      <Typography variant='h1' component='div' className={classes.pageTitle}>
        Bookmark
      </Typography>
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
  )
}

export default Bookmark