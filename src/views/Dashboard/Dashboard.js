import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
 
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
 import {
  SensorWind,
   SensorHumidity,
   SensorSunshine,
   RainAmount,
   Map
} from './components/';
 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  
 
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
        
           <Grid container spacing={4}>
            
          <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          >
          <SensorWind />
        </Grid>

        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
         <SensorHumidity /> 
        </Grid>

        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
         <SensorSunshine /> 
        </Grid>

      <Fab variant="extended" color="primary">
        <AddIcon className={classes.extendedIcon} />
        Ajouter un champ
      </Fab>
        </Grid> 

        

        <br></br>

        {/* Map */}
        <Grid
          item
          lg={8}
          sm={6}
          xl={3}
          xs={12}
        >
         <Map /> 
        </Grid>
        <br></br>      <br></br>
        {/* RainAmount */}
        <Grid
          item
          lg={6}
          sm={8}
          xl={8}
          xs={8}
        >
         <RainAmount /> 
        </Grid>
         
       </Container>
      </main>
    </div>
  );
}
