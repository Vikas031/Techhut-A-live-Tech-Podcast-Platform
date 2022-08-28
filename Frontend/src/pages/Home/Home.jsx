import React from 'react'
import styles from './Home.module.css';
import { Link,useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
const Home = () => {
  const signInLinkStyle={
    color:"#0077ff",
    fondWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px'
  }

  const history=useNavigate();
  function startRegister(){
    history('/authenticate');
  }
  return (
    <div className={styles.cardWrapper}> 
      <Card title="Welcome to CoderHouse !!!" logo="logo.png">

      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, dolore doloribus debitis assumenda repellat autem laborum qui asperiores delectus sint. Commodi architecto fugit eligendi voluptate veritatis nihil maiores voluptatem vitae.
      </p>

      <Button text="Let's Go" onclick={startRegister}></Button>

      <div className={styles.signinWrapper}>
        <span className={styles.hasInvite}>Have an invite text?</span>
        <Link style={signInLinkStyle} to="/authenticate">Sign In</Link>
      </div>

       </Card> 
     
    </div>
      )
}

export default Home