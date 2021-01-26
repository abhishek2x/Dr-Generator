import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  para: {
    // color: '#212121',
    // TODO: need to change in dark theme
  },
  cont: {
    marginTop: '100px'
  }
  // rots: {
  //   position: 'absolute',
  //   transform: [{ rotate: '10deg'}]
  // }
}));

function WorkLeft({ text1, text2, image }) {
  const classes = useStyles();

  return (
    <Container
      container
      maxWidth="lg"
      className={classes.cont}
    >
      <Grid container>

        <Grid container item xs={5} justify="center">
          <Typography
            component="h3"
            variant="h4"
            para
            color="textPrimary"
            className={classes.para}
          >
            {text1}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ overflowWrap: 'break-word' }}
          >
            {text2}
          </Typography>
          {/* <Typography
            component="h6"
            variant="h6"
            para
            color="textPrimary"
          >
            <Button variant="contained" color="secondary">Check this</Button>
          </Typography> */}
        </Grid>


        <Grid item xs={2}>
          {/* Intentionally Empty */}
        </Grid>

        <Grid container item xs={5} justify="center">
          <img width="400" src={image} alt="working" />
        </Grid>

      </Grid>
    </Container>
  )
}

export default WorkLeft
