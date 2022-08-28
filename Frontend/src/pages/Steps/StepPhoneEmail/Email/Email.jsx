import React,{useState} from 'react'
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import Textinput from '../../../../components/shared/Textinput/Textinput';
import styles from '../StepPhoneEmail.module.css';

const Email = ({onClick}) => {
    const [email,setmail]=useState('');
  return (
    <Card title="Enter Your E-mail" logo="email-emoji.png">

    <Textinput value={email} onChange={(e)=>setmail(e.target.value)} />

    <div className={styles.actionButtonWrap}> 
    <Button text="Next" onclick={onClick}></Button>
    </div>
  
    <p className={styles.bottomParagraph}>
        By enterting your e-mail , you're agreeing to our Terms of service and Privacy Policy. Thanks!
    </p>
     </Card>  
  )
}

export default Email