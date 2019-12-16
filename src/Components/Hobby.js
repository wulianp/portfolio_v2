import React from "react";
import tileData from './tileData';
import CssBaseline from '@material-ui/core/CssBaseline';
import Gallery from "react-photo-gallery";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '50px',
    paddingRight:' 0px',
  }
}))

export default function Hobby() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}> 
      <CssBaseline />
      <Gallery photos={tileData} />;
      </div>
  );
}
