import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

 import {
  SensorWind,
  SensorHumidity,
  SensorSunshine,
  RainAmount,
  Report,
  Map
} from './components/';
 

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
	marginTop: 20,
	marginLeft: 50,
	zIndex: theme.zIndex.drawer + 1,
	overflow: 'scroll',  
	height:'100vh',
	
  },
}));

const Dashboard = () => {
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
      
        </Grid> 

        <Grid container spacing={4}>

        {/* Map */}
        <Grid
          item
          lg={7}
          sm={6}
          xl={3}
          xs={12}
        >
         <Map /> 
        </Grid>

        {/* Report */}
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Report />
        </Grid> 

        </Grid> 
     
        <br></br>      <br></br>
        {/* RainAmount  <RainAmount />*/}
        <Grid
          item
          lg={7}
          sm={6}
          xl={3}
          xs={12}
        >
          <RainAmount />
        </Grid> 
         
       </Container>
      </main>
    </div>
  );
};

export default Dashboard;