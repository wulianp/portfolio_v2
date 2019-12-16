import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import resume from '../photos/Resume.png';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    height: 620,
    width: 500,
    justiftyContent:"center", 
    alignItems:"center",
    display: 'flex',
  },
  card: {
    height: 150,
    width: 200,
    margin: '250px 0px',

  },
  media: {
    height: 650,
    width: 500,
    marginTop: '59px'
  },
  icon:{
    height: 150,
    width: 200,
    margin: '250px 0px',
    textAlign: 'center',
  },
  res:{
    margin: theme.spacing(1),
  }

}));

export default function Resume() {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
            <Grid key={0} item>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={resume}
                  title="Resume"
                />
              </CardActionArea>
            </Grid>
            <Grid key={1} item  className={classes.icon}>
              {/* <Paper className={classes.paper} > */}

                <ReceiptTwoToneIcon style={{ fontSize: 70  }}/>
                <Typography variant="h3" gutterBottom>
                  Resume
                </Typography>
                <Button 
                  // component={Link} to='/resume'
                  color="primary"
                  variant="contained"
                  size="small"
                  className={classes.res}
                  >
                    Download pdf
                  </Button>


            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}