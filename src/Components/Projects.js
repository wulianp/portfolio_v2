import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import posts from './cardData'
import Lightbox from 'react-lightbox-component';
import Chip from '@material-ui/core/Chip';
 
 const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '90px',
    paddingTop: '10px',

  },
  card: {
    maxWidth: 345,
  },
  gridFour: {
    maxWidth: 345,
    margin: '10px'
  },
  media: {
    
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover",
  },
  expand: {
    maxWidth: 700,
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


export default function Projects(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i );
  };

  return (
    <div className={classes.root}>
      <h1> Projects</h1>
      <Grid container spacing={40} justify="center">
        {posts.map(({title,cardNumber,excerpt,image,images,technologies},i) => (
          <Grid item key={cardNumber} className={classes.gridFour}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography component="p">{excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Source
                </Button>
                <Button size="small" color="primary">
                  Demo
                </Button>
                <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}

            onClick={() => handleExpandClick(i)}
            aria-expanded={expanded === i}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded === i} timeout="auto" unmountOnExit>
          <CardContent>
          <CardMedia
                  component="img"
                  className={classes.media}
                  image={image}
                  title="Contemplative Reptile"
                />
            <Lightbox images={images}
              thumbnailWidth='170px'
              thumbnailHeight='170px'/>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {excerpt}
          </Typography>
          {technologies.map((tech,j) => {
            return(
            <Chip
            size="small"
            label={tech}
          /> )
          })}

          </CardContent>
      </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

