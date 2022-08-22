import React,{useState} from 'react'
import styles from './Register.module.css';
import StepUsername from '../Steps/StepUsername/StepUsername';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

// steps for registering 
const steps={
  1:StepPhoneEmail,
  2:StepOtp,
  3:StepName,
  4:StepAvatar,
  5:StepUsername

}
const Register = () => {
    const [step,setStep]=useState(1);
    const Step =steps[step];
    function gotoNext(){
      setStep(step+1);
    }
    
    return (
      <div>
        <Step gotoNext={gotoNext}/>
      </div>
    )
}
export default Register