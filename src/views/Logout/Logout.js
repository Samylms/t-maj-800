import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
 import {instance} from '../../api';
 import api from '../../api';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

 
 
const useStyles = makeStyles(theme => ({

}));

const SignIn = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

 window.location.href="/";

  return (
   <div>
   </div>
  );
};

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function is_null_or_empty(elem)
{
	if( elem == null || typeof elem === 'undefined' || elem.value == '')
	{
		return true;
	}
	else
	return false;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

	function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

async function Sign_in() {
    var email = document.getElementsByName("email")[0]; 
    var _password = document.getElementsByName("password")[0]; 
	
    if (is_null_or_empty(email) || is_null_or_empty(_password) )
    {
	  alert("un ou plusieurs champs sont vides");
	  return;
    }
	else
	{
		if(!validateEmail(email.value))
		{
			alert("format du mail incorrect !");
			return;
		}
		email = email.value;; 
		_password = _password.value; 

	
		await instance.post(instance.defaults.baseURL + '/users/login', {
					email: email,
					password: _password,
		})
		.then(function (response) {
			setCookie("bearer",response.data.token, 1);
			window.location.href = window.location.href = "/";
		})
		.catch(function (error) {
			alert(error.response.data.msg);
		});
   
		return ;
	
	}
}

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
