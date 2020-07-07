import React  from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 
import Dashboard from '@material-ui/icons/Dashboard';
import HorizontalSplit from '@material-ui/icons/HorizontalSplit';
import Person from '@material-ui/icons/Person';
 
 
const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));
 
export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
   
      <List  >  
      <ListItem 
        button  
        key="Dashboard"
        component={NavLink} to="/">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem 
        button  
        key="Farm"
        component={NavLink} to="/Farm">
          <ListItemIcon>
            <HorizontalSplit />
          </ListItemIcon>
          <ListItemText primary="Farm" />
        </ListItem>

        <ListItem 
        button  
        key="CustomerService"
        component={NavLink} to="/CostumerService">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Costumer Service" />
        </ListItem>
      </List>
     
    </div>
  );
}