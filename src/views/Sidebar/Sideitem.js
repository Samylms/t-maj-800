import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 
import Dashboard from '@material-ui/icons/Dashboard';
import HorizontalSplit from '@material-ui/icons/HorizontalSplit';
import Person from '@material-ui/icons/Person';
 import React, { Component } from 'react'
 
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
 

 
 
 
 function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
 function deleteCookie(name) { 
	setCookie(name, '', -1); 
 }

 
 function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

export default class SimpleList extends Component {

 constructor(props) {
    super(props)
	this.state = {name: "Signin", signin: "/signin"};
  }

  componentDidMount() {
  	 var elem = getCookie("bearer");
	 if(elem != null)
	 {
		 this.setState({name :"Log out", signin:"/logout"});
		 deleteCookie("bearer");
		 this.setState();
		 
		 
		return;
	 }
	 else{
		this.setState({name :"log In", signin:"/signin"});
		
		return ;
	 }
}
  render(){
  return (
    <div class="root">
      
   
      <List>  
	  


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
        component={NavLink} to="/CustomerService">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Customer Service" />
        </ListItem>
		
		 <ListItem name="signin_signout"
        button  
        key="Signin"
        component={NavLink} to={this.state.signin}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText name="signin_name" primary={this.state.name} />
        </ListItem>
      </List>
     
    </div>
	)};
}