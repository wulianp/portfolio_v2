
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fab from '@material-ui/core/Fab';
import EmailIcon from '@material-ui/icons/Email';
import NoteIcon from '@material-ui/icons/Note';
import {Link} from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import './Profile.css';
import profile from '../photos/profile.png';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        // backgroundImage:' linear-gradient(147deg, #FFE53B 0%, #fd3838 74%)',
        // backgroundImage: 'linear-gradient( 1.4deg,  rgba(139,166,246,1) 3.5%, rgba(168,240,248,1) 96.6% )',
        height: '780px',
        padding: '0px',
        margin: 'auto',
        marginBottom: '-51px'
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
      display: 'inline-block',
      padding:0,
    },
    margin: {
      margin: theme.spacing(1),
    },
    paper: {
      height: 500,
      width: 300,
      marginTop: '112px'
    },
  }));

export default function Profile() {
    const classes = useStyles();
    return(
        <Grid container className={classes.root} >
        {/* <Grid item xs={12}> */}
          {/* <Grid container justify="center" spacing={4}> */}
          <Grid key={0} item>
            <div class="card-container">
              <img src={profile} alt="user"/>
              <h3>Phillip Wu Liang</h3>
              <h6>Seattle, Washington</h6>
              <p>Recent Computer Science Graduate <br/> Software Engineer</p>
              <div className={classes.extendedIcon}>
                  <Button 
                  component={Link} to='/resume'
                  color="primary"
                  variant="contained"
                  size="small"
                  className={classes.margin}
                  startIcon={<NoteIcon />}>
                    Resume
                  </Button>
                  <Fab  size="small" color="secondary" className={classes.margin} aria-label="github">
                <GitHubIcon />
                </Fab>
                <Fab  size="small"  className={classes.margin} color=" secondary" aria-label="email" >
                <EmailIcon />
                </Fab>
                <Fab  size="small" className={classes.margin}  color="secondary" aria-label="linkedin">
                <LinkedInIcon />
                </Fab>

              </div>
              <div class="skills">
                  <h6>Skills</h6>
                  <ul>
                      <li>Java</li>
                      <li>Python</li>
                      <li>C </li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Node</li>
                      <li>SQL</li>
                  </ul>
              </div>
          </div>
          </Grid>
        </Grid>
      // </Grid>
      // </Grid>
      
  );
}

