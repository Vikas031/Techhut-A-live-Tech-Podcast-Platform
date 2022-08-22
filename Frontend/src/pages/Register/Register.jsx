import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
const Register = () => {
    const signInLinkStyle={
        color:"#0077ff",
        fondWeight:'bold',
        textDecoration:'none',
        marginLeft:'10px'
      }
    
      const history=useNavigate();
      function startRegister(){
        history.push('/');
      }
      return (
        <div className={styles.cardWrapper}> 
          <Card title="Welcome to CoderHouse !!!" logo="logo.png">
    
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, dolore doloribus debitis assumenda repellat autem laborum qui asperiores delectus sint. Commodi architecto fugit eligendi voluptate veritatis nihil maiores voluptatem vitae.
          </p>
    
          <Button text="hey hey hey" onClick={startRegister}></Button>
    
          <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
            <Link style={signInLinkStyle} to="/login">Sign In</Link>
          </div>
    
           </Card> 
         
        </div>)
}

export default Register