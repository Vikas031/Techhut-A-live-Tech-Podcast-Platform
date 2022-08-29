import React,{useState} from 'react'
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import Textinput from '../../../../components/shared/Textinput/Textinput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http';
import {useDispatch} from 'react-redux';
import { setOtp } from '../../../../store/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Phone = ({onClick}) => {
    const [phoneNumber,setphone]=useState('');
  //   const notify = () => {
  //     toast.success('Success Notification !', {
  //         position: toast.POSITION.TOP_RIGHT
  //     });
  // };


    const dispatch=useDispatch();

    async function submit(){
      if(!phoneNumber)
      { 
        return;
      }
      
      //server request
      const res=await sendOtp({phone:phoneNumber});
      console.log(res.data);
      dispatch(setOtp({phone:res.data.phone,hash:res.data.hash}))

      onClick();
    }
  return (
    <>
    <ToastContainer/>
    <Card title="Enter Your Phone Number " logo="phone.png">

    <Textinput value={phoneNumber} onChange={(e)=>setphone(e.target.value)} />
    
    <div className={styles.actionButtonWrap}> 
    <Button text="Next" onclick={submit}></Button>
    </div>
  
    <p className={styles.bottomParagraph}>
        By enterting your number , you're agreeing to our Terms of service and Privacy Policy. Thanks!
    </p>
     </Card>
     </> 
  )
}

export default Phone