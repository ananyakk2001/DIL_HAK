import React, { useState } from 'react';
import './login.css';
import logo from './dilhak.png';
import axios from 'axios';


function AdminLogin() {
  const [showPassword,setShowPassword]=useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  var [username,setName]=useState('');
  var [password,setPassword]=useState('');
  var [usernameError,setNameError]=useState('');
  var [passwordError,setPasswordError]=useState('');

  const handleInputChange = (event) =>{
    const {name,value} = event.target;
    if(name === 'username')
      {
        setName(value);
        setNameError(value.trim() === '' ? 'Username is Required':'');
      }
      else if(name === 'password')
        {
          setPassword(value);
          setPasswordError(value.trim() === '' ? 'Password is Required' : value.length < 8  ? 'Password must have more than 8 characters' : '');
        }
  };

  const handleSubmit =  async(event) =>{
    event.preventDefault();
    setIsSubmitting(true);

    if(username.trim() ==='')
      {
        usernameError ='Username is Required';
      }
    if(password.trim() === '')
      {
        passwordError = 'Password is Required';
      }
    else if(password.length < 8)
      {
        passwordError = 'Password must have more than 8 characters';
      }
    setNameError(usernameError);
    setPasswordError(passwordError);
    if(usernameError || passwordError)
      {
        setIsSubmitting(false);
        return;
      }  
    //alert('Form Submitted Successfully');
    try{
      let a = await axios.post('http://127.0.0.1:8000/auth/admin/login/',{username:username, password:password});

      if(a.status === 200)
      {
        const user = a.data.user;
        console.log(user);
        if (user.is_product_admin) {
          alert("Productadmin login success");
          window.location.href = '/productadmin-dashboard';
        } 
        else if (user.is_order_admin) {
          alert("Orderadmin login success");
          window.location.href = '/orderadmin-dashboard';
        }   
        else {
          alert("Superadmin login success");
          window.location.href = '/';
        }
      } 
     }
     catch(error)
     {
      alert(error.response.data.message);
      console.log(error.response.data.message);
     }
     finally {
      setIsSubmitting(false); // Set isSubmitting back to false when submission is done
     } 
    //console.log(a);
    // setName('');
    // setPassword('');
  };


  return (
    <div className='login_body'>
      <div className='login_container'>
            <div className='login_top'></div>
            <div className='login_top2'></div>
                    <div className='login_center'>
                      <form onSubmit={handleSubmit}>
                        <img className='login_image' src={logo}/>
                        {/* <h2>Welcome, Sign In</h2>  */}
                        <div className='form-control login_input' style={{marginTop:'10px',borderColor:usernameError?'red':''}}><i className='fa-solid fa-envelope icon'/><input className='form-control login_email' type="text" placeholder="Enter Your Email" name='username' onChange={handleInputChange}/></div>
                        <div><label className='form-label' style={{marginLeft:'10px',color:'red'}}>{usernameError}</label></div>
                        <div className='form-control login_input' style={{marginTop:'10px',borderColor:passwordError?'red':''}}><i className='fa-solid fa-lock icon'/><input className='form-control login_password' id='password' type={showPassword?"text":"password"} placeholder="Enter Your Password" name='password' onChange={handleInputChange}/><button type='button' id="password_button" onClick={togglePassword}>{showPassword?<i className='fa-solid fa-eye-slash'/>:<i className='fa-solid fa-eye'/>}</button></div>
                        <div><label className='form-label' style={{marginLeft:'10px',color:'red'}}>{passwordError}</label></div>
                        <button className='login_submit' type='submit' disabled={isSubmitting}>
                          {isSubmitting ? <>Logging in&nbsp;<i className="fas fa-spinner fa-spin"></i> </> : "Login"}
                        </button>
                      </form>
                    </div>
            <div className='login_bottom'></div>
            <div className='login_bottom2'></div>
        </div>
    </div>
  )
}

export default AdminLogin

