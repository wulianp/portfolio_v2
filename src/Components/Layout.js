import React , {Fragment} from 'react';
import {Link} from 'react-router-dom'; 
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeTwoTone from '@material-ui/icons/HomeTwoTone';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import NoteIcon from '@material-ui/icons/Note';
import Popover from '@material-ui/core/Popover';
import withRoot from '../withRoot';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {

    display: 'list-item',
    // backgroundImage:' radial-gradient( circle farthest-corner at 10% 20%,  rgba(248,219,219,1) 0%, rgba(229,248,250,1) 90% )',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#18202c',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundImage:' radial-gradient( circle farthest-corner at 18.7% 37.8%, rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% );',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundImage:' radial-gradient( circle farthest-corner at 18.7% 37.8%, rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% );',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    backgroundImage:' radial-gradient( circle farthest-corner at 18.7% 37.8%, rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% );',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
  },
  content: {
    
    flexGrow: 1,
    mx: 'auto',
    padding: theme.spacing(5)
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    backgroundImage:' radial-gradient( circle farthest-corner at 18.7% 37.8%, rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% );',
    padding: theme.spacing(1),
  },
}));
  
function Layout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const openpop = Boolean(anchorEl);
  
    

    return ( <Fragment>
      {/* <CssBaseline /> */}
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {/* Mini variant drawer */}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.root}>
            <Paper elevation={0}>
                <MenuList>
                    <MenuItem component={Link} to='/'>
                      <ListItemIcon 
                          aria-owns={openpop ? 'mouse-over-popover' : undefined}
                          aria-haspopup="true"
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}>
                      <HomeTwoTone fontSize="large" />
                      </ListItemIcon>
                      <Popover
                      id="mouse-over-popover"
                      className={classes.popover}
                      classes={{
                        paper: classes.paper,
                      }}
                      open={openpop}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography>Home Page.</Typography>
                    </Popover>
                    Home
                   </MenuItem>
                   <MenuItem component={Link} to='/profile'>
                      <ListItemIcon>
                        <FaceSharpIcon fontSize="large" />
                      </ListItemIcon>
                    Profile
                   </MenuItem >
                   <MenuItem component={Link} to='/projects'>
                      <ListItemIcon>
                        <WorkSharpIcon fontSize="large" />
                      </ListItemIcon>
                    Projects
                   </MenuItem>
                   <MenuItem component={Link} to='/resume'>
                      <ListItemIcon>
                        <NoteIcon fontSize="large" />
                      </ListItemIcon>
                    Resume
                   </MenuItem>
                   <MenuItem component={Link} to='/hobby'>
                      <ListItemIcon>
                        <FavoriteSharpIcon fontSize="large" />
                      </ListItemIcon>
                    Photography
                   </MenuItem>
                </MenuList>
              </Paper>
            </div> 
          <Divider />
        </Drawer>
        <main className={classes.content}>
            {props.children}

        </main>
      </div>
    </Fragment>
    );
  }

  export default withRoot(Layout);

