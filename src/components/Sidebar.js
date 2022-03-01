import React from 'react';
import './Sidebar.css';
//import logo from '../assets/logo.svg';
import Input from './Input';

const Sidebar = () => {
    return (
      <div class = 'SidebarContainer'>
          <div class = 'LogoWrapper'>
           
            
          </div>

          <form>
              <h3 class = 'SignUp'>Sign Up</h3>
              <Input placeholder = 'Name' />
              <Input type = 'email' placeholder = 'Email' />
              <Input type = 'password' placeholder = 'Password' />
              <Input type = 'password' placeholder = 'Confirm Password' />
              <button>Sign Up</button>
          </form>

          <div>
              <p class = 'Terms'>
                By signing up, I agree to the Privacy Policy <br /> and Terms of
                Service. 
              </p>
          </div>
          <h4>
              Already have an account? <span class = 'SignIn'>Sign In</span>
          </h4>
      </div>
    );
  }
  
  
export default Sidebar;
  