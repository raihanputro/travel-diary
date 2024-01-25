import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Box, Typography, TextField, Button } from '@mui/material';
import card1 from '../../../public/card1.png';
import { selectLogin } from '@containers/Client/selectors';

import CardPost from '@components/Card';

import classes from './style.module.scss';
import { createStructuredSelector } from 'reselect';

const Home = ({ login }) => {
  const dispatch = useDispatch();

  return (
    <Box className={classes.container}>
      <Typography variant="h1" component="div" className={classes.pageTitle}>
        Journey
      </Typography>
      <Box className={classes.searchContainer}>
        <input className={classes.inputSearch} variant="outlined" type='text' placeholder='Find Journey'/>
        <Button id="outlined-required" className={classes.buttonSearch}>Search</Button>
      </Box>
      <Box className={classes.cardContainer}>
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
        <CardPost img={card1} title={'Bersemayam di tanah Dewata'} date={'29 July 2020'} author={'Cipto'} shortDesc={'Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..'} />
      </Box>
    </Box>
  );
};

Home.propTypes = {
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Home);
