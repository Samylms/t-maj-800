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

 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
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