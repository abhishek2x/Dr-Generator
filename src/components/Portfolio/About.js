import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import img from '../../static/images/portfolio.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000524',
    minHeight: '100vh'
  },
  mainGrid: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageDiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
}));

function About({ first, last, desc, city, country, email }) {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Grid container>
        <Grid
          item
          xs={4}
          className={classes.imageDiv}
        >
          <img height='200' src={img} alt="Abhishek" />
        </Grid>
        <Grid item xs={8} className={classes.mainGrid}>
          <Grid item xs={8}>
            <Typography variant="h4" className={classes.text}>
              About Me
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.text}>
              {desc}
            </Typography>
            <br />
            <br />
            <Typography variant="h4" className={classes.text}>
              Contact Details
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.text}>
              {first}{' '}{last}
            </Typography>
            <Typography variant="subtitle1" className={classes.text}>
              {city}, {country}
            </Typography>
            <Typography variant="subtitle1" className={classes.text}>
              {email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
