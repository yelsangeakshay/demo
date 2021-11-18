import React,{useState} from "react";
import Navbar from "../navbar/navbar";
import "./signin.css"
import {Label,MediumLabel,SmallLabel,Title} from './styled-components'
import { ReactComponent as WelcomeIcon } from '../../assets/images/customer_welcome_page.svg';

const SignIn = () => {
    const [signUpFlag,setSignup] = useState(false)
    const SignInContainer =()=>{
        return(
                <div className='main-container'>
                    <div className='signin-container'>
                       <SignInform/>
                       <div className='vertical-line'></div>
                       <MainSection/>
                     </div>                  
                </div>
                                
        )
    }

    const createAccount=(e)=>{
        e.preventDefault()
        setSignup(true)
        console.log(signUpFlag)              
    }
    const SignInform =()=>{
       
        return(
            <div className='signin-section'>
              
            <div className='signin-form'>
                {/* SIgn up or Sign based on flag Signup */}
                { signUpFlag ? <Title>Sign Up</Title> :
                <Title>Sign In</Title>}
           
            <div className='margin-top-1'>
                {signUpFlag ?  <Label>Sign up via Email</Label>:
                <Label>Sign in via Email</Label>
                }

            
            </div>
           
            <div className='input-data'>
            <input type="text" id="email" name="emailid" placeholder="Email Id"/>
            </div>
            <div className='input-data'>
            <input type="password" id="password" name="password" placeholder="Password"/>
            </div>
            <SmallLabel>Forget Password?</SmallLabel>
            <div className='divider'>
                {/* <div className='marginer'></div> */}
                <Label>OR</Label>
                {/* <div className='marginer'></div> */}
            </div>
            {/* Sign In Via Mobile */}
            <div className='signin-mobile-section'>
                {signUpFlag ? <MediumLabel>Sign up via Mobile Number</MediumLabel>:
                <MediumLabel>Sign in via Mobile Number</MediumLabel>
                }
                
                <div className='input-container'>              
                <input type="number" id="number" name="number"/>
                </div>
            </div>

            <div className='button-login'>
                {signUpFlag ? <input type='submit' value='Sign Up'/>:
                 <input type='submit' value='Login'/>}
           
            </div>
            {!signUpFlag ? (
                <>
                <div className='divider'>
                {/* <div className='marginer'></div> */}
                <Label>New to Urban Plants?</Label>
                {/* <div className='marginer'></div> */}
                </div>

                 {/* Create New account */}
                <div className='button-create-account'>
            <input type="button"  class="button" value="Create your account" onClick={createAccount}/>
            </div>
                </>
                
                
            ):null}
            
          
            
           
           
            
            </div>
            </div>
        )
    }

    const MainSection = ()=>{
        return(
            <div className='welcome-container'>
                <div className='title-message'>
                <Title>Welcome To Urban Plants!</Title>
                </div>
                <div className='welcome-icon'>
                <WelcomeIcon className='welcome-logo'/>
                </div>
               
            </div>
            
          
        )
    }



    return(
       
       <div>
       <Navbar/>
       {SignInContainer()}
       </div>
       
    )
}

export default SignIn;