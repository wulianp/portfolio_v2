import React from 'react';
import Typist from 'react-typist';
import { makeStyles } from '@material-ui/core/styles';
 import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backgroundBlendMode: 'multiply',
        height: '100%',
        padding: '0px',
        marginRight: '-41px',
        margin: 'auto',
        marginBottom: '-51px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
  },

  paper:{
    height: '100%',

  },

  typist: {
    textAlign: 'center',
    lineHeight: 6,
    color: 'black',
    boxShadow:' 10px 10px 15px rgba(0,0,0,0.35)',
    paddingTop: '50px',
    backgroundColor: 'white',
},

}));

export default function Home() {
  const classes = useStyles();

    return (

            <div className={classes.typist}>
            <Typist>
                <Typography variant="h3" gutterBottom>
                Hello!
                </Typography>
                <Typography variant="h5" gutterBottom>
                I'm Phillip Wu Liang and this is my website!
                </Typography>
              </Typist>
            </div>
    )
  }
